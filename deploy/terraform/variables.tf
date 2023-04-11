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
