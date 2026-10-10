# Incident Command

Incident Command is a DevSecOps-focused incident management
platform built using Node.js, Python, React, PostgreSQL,
Podman, and GitHub Actions.

## Project Overview

The platform will support:

- Incident declaration and management
- Responder assignments
- Alert webhook ingestion
- Runbook automation
- Escalation timers
- Incident timelines
- Post-mortem generation
- Role-based access control

## Technology Stack

### Backend
- Node.js
- Express.js

### Frontend
- React

### Automation
- Python

### Database
- PostgreSQL

### Containerization
- Rootless Podman

### CI/CD
- GitHub Actions

### DevSecOps Tools
- Semgrep
- Bandit
- Snyk
- OWASP Dependency-Check
- Trivy
- Grype
- OPA/Rego
- Checkov

## Infrastructure

Application Server:
- Ubuntu 24.04 LTS
- Rootless Podman

Database Server (Sprint 1):
- Windows 11
- Ubuntu WSL2
- PostgreSQL

## Development Roadmap

- Sprint 0: Infrastructure and CI/CD
- Sprint 1: Incident API and PostgreSQL
- Sprint 2: React UI and Python Runbook Automation
- Sprint 3: Escalation and Container Security
- Sprint 4: Policy-as-Code
- Sprint 5: Portfolio and Final Demo

## Current Status

Sprint 0 — Infrastructure Setup