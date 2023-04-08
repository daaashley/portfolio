terraform {
  backend "s3" {
    bucket         = "personal-site-tf-bucket-daaashley"
    key            = "personal-site.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "personal-site-api-devops-tf-state-lock"
  }
}

provider "aws" {
  region  = "us-east-1"
  version = "~> 4.0"
}

# Local dynamic variables create from vars
locals {
  prefix = "${var.prefix}-${terraform.workspace}"
}
