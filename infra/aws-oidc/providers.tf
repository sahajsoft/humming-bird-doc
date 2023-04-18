terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.62.0"
    }
  }

  backend "s3" {
    bucket = "humming-bird-amplify-tf-state"
    key = "humming-bird-oidc-provider.tfstate"
    region = "ap-south-1"
  }

  required_version = "1.4.5"
}

# Configure the AWS Provider
provider "aws" {
  region = "ap-south-1"
}