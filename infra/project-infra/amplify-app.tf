resource "aws_amplify_app" "humming-bird-amplify-app" {
  name = "humming-bird-doc"
  repository = "https://github.com/sahajsoft/humming-bird-doc"

  build_spec = file("build-spec.yaml")
  enable_branch_auto_build = true

  access_token = var.github_access_token
}

resource "aws_amplify_branch" "humming-bird-amplify-branch" {
  app_id      = aws_amplify_app.humming-bird-amplify-app.id
  branch_name = "main"

  framework = "React"
}

resource "aws_amplify_webhook" "humming-bird-amplify-webhook" {
  app_id      = aws_amplify_app.humming-bird-amplify-app.id
  branch_name = aws_amplify_branch.humming-bird-amplify-branch.branch_name

  description = "listen to commits on main branch"
}