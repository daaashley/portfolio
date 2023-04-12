resource "aws_subnet" "main" {
  name              = "${local.prefix}-main"
  id                = aws_subnet.public_a.id
  availability_zone = "us-east-1a"


  tags = merge(
    local.common_tags,
    tomap({ Name = "${local.prefix}-main" })
  )
}

# Security group for inbound access to databse
resource "aws_security_group" "rds" {
  description = "Allow access to the RDS database instance"
  name        = "${local.prefix}-rds-inbound-access"
  vpc_id      = aws_vpc.main.id

  ingress {
    protocol  = "tcp"
    from_port = 5432
    to_port   = 5432
  }

  tags = local.common_tags
}

resource "aws_db_instance" "main" {
  identifier              = "${local.prefix}-db"
  name                    = "personal"
  allocated_storage       = 10
  storage_type            = "gp2"
  engine                  = "postgres"
  engine_version          = "11.4"
  instance_class          = "db.t2.micro"
  db_subnet_group_name    = aws_subnet.main.name
  password                = var.db_password
  username                = var.db_username
  backup_retention_period = 0
  multi_az                = false
  skip_final_snapshot     = true
  vpc_security_group_ids  = [aws_security_group.rds.id]

  tags = merge(
    local.common_tags,
    tomap({ Name = "${local.prefix}-main" })
  )
}
