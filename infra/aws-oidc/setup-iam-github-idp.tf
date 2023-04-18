module "oidc_github" {
  source  = "unfunco/oidc-github/aws"
  version = "1.3.1"

  github_repositories = [
    "${var.GitHubOrg}/${var.RepositoryName}"
  ]

  tags = {
    createdBy = "anirudhr"
    usedBy = "humming-bird-doc-react"
    purpose = "github-oidc"
  }
}