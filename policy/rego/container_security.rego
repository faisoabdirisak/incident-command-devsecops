package incidentcommand.security

import rego.v1

# Deny containers that are not explicitly configured to run as non-root.
deny contains msg if {
	some container in input.spec.containers

	not container.securityContext.runAsNonRoot == true

	msg := sprintf(
		"Container '%s' must set runAsNonRoot to true",
		[container.name],
	)
}

# Deny containers that allow privilege escalation.
deny contains msg if {
	some container in input.spec.containers

	not container.securityContext.allowPrivilegeEscalation == false

	msg := sprintf(
		"Container '%s' must set allowPrivilegeEscalation to false",
		[container.name],
	)
}
