variable "prefix" {
  default = "personal"
}


variable "project" {
  default = "personal-site-api-devops"
}

variable "contact" {
  default = "david-ashley@hotmail.com"
}

variable "db_username" {
  description = "Username for the RDS Postgres instance"
}


variable "db_password" {
  description = "Password for the RDS Postgres instance"
}

variable "bastion_key_name" {
  default = "personal-site-api-devops-bastion"
}

variable "db_host" {
  description = "AWS RDS database URL"
}

variable "ecr_image_api" {
  description = "ECR image for API"
  default     = "134895018143.dkr.ecr.us-east-1.amazonaws.com/personal-site"
}


variable "dns_zone_name" {
  description = "Domain name"
  default     = "vibeeng.com"
}

variable "subdomain" {
  description = "Subdomain per environment"
  type        = map(string)
  default = {
    production = "api"
    staging    = "www"
    dev        = "api.dev"
  }
}
