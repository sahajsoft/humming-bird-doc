data "aws_iam_openid_connect_provider" "github-idp-provider" {
  url = "https://token.actions.githubusercontent.com"
}

data "aws_caller_identity" "current" {}

data "aws_iam_policy" "s3FullAccess" {
  arn = "arn:aws:iam::aws:policy/AmazonS3FullAccess"
}

data "aws_iam_policy" "AmplifyFullAccess" {
  arn = "arn:aws:iam::aws:policy/AdministratorAccess-Amplify"
}

resource "aws_iam_role" "github-oidc-role" {
  name = "humming-bird-github-oidc-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Action    = "sts:AssumeRoleWithWebIdentity"
        Principal = {
          Federated = "${data.aws_iam_openid_connect_provider.github-idp-provider.arn != "" ? "arn:aws:iam::${data.aws_caller_identity.current.account_id}:oidc-provider/token.actions.githubusercontent.com" : "GithubOidc"}"
        }
        Condition = {
          StringEquals = {
            "token.actions.githubusercontent.com:aud" = var.OIDCAudience
          }
          StringLike = {
            "token.actions.githubusercontent.com:sub" = "repo:${var.GitHubOrg}/${var.RepositoryName}:*"
          }
        }
      }
    ]
  })
  managed_policy_arns = [data.aws_iam_policy.AmplifyFullAccess.arn, data.aws_iam_policy.s3FullAccess.arn]

  tags = {
    createdBy = "anirudhr"
    usedBy = "humming-bird-doc-react"
    purpose = "github-oidc"
  }
}

output "Role" {
  value = aws_iam_role.github-oidc-role
}