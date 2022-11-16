package com.example.saaku.model;

//import java.util.HashSet;
//import javax.persistence.*;
//import java.util.Set;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.JoinTable;
//import javax.persistence.ManyToMany;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "user",
//		@UniqueConstraint(ColumnNames = "user_name"),
//		@UniqueConstraint(ColumnNames = "email")
//})
//
//public class User {
//	
//@Id
//@Column(name="user_id")
//@GeneratedValue(strategy = GenerationType.IDENTITY)
//private Long user_id;
//
//@NotBlank
//@Size(max = 20)
//private String user_name;
//
//@NotBlank
//@Size(max = 120)
//private String passwd;
//
//@NotBlank
//@Size(max = 50)
//@EMail
//private String email;
//
//@ManyToMany(fetch = FetchType.LAZY)
//@JoinTable( name ="user_n_role",
//		joinColumns = JoinColumn(name="user_id"),
//		inverseJoinColumns = @JoinColumn(name="ut_id"))
//
//private  Set<Role> roles = new HashSet<>();
//
//
//
//
//public User(String user_name, String passwd, String email) {
//	super();
//	this.user_name = user_name;
//	this.passwd = passwd;
//	this.email = email;
//}
//
//public Long getUser_id() {
//	return user_id;
//}
//public void setUser_id(Long user_id) {
//	this.user_id = user_id;
//}
//public String getUser_name() {
//	return user_name;
//}
//public void setUser_name(String user_name) {
//	this.user_name = user_name;
//}
//public String getPasswd() {
//	return passwd;
//}
//public void setPasswd(String passwd) {
//	this.passwd = passwd;
//}
//public String getEmail() {
//	return email;
//}
//public void setEmail(String email) {
//	this.email = email;
//}
//
//}




import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;





@Entity
@Table(	name = "users", 
		uniqueConstraints = { 
			@UniqueConstraint(columnNames = "username"),
			@UniqueConstraint(columnNames = "email") 
		})
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 20)
	private String username;

	@NotBlank
	@Size(max = 50)
	@Email
	private String email;

	@NotBlank
	@Size(max = 120)
	private String password;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_roles", 
				joinColumns = @JoinColumn(name = "user_id"), 
				inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();
	
	
	@OneToMany(mappedBy="us")
	private List<Complaints> complaints;
	
	
	@OneToMany(mappedBy="uss")
	private List<Status> status;
	

	public List<Status> getStatus() {
		return status;
	}

	public void setStatus(List<Status> status) {
		this.status = status;
	}

	public List<Complaints> getComplaints() {
		return complaints;
	}

	public void setComplaints(List<Complaints> complaints) {
		this.complaints = complaints;
	}

	public User() {
	}

	public User(String username, String email, String password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
}
