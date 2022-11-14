package com.example.saaku.exception;

@SuppressWarnings("serial")
public class RoleNotFoundException extends RuntimeException{

	public RoleNotFoundException(Long ut_id) {
		 super("No such Role with roleid : "+ut_id);
	}
}
