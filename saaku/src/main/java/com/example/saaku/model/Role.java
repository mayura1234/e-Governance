package com.example.saaku.model;

//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.EnumType;
//import javax.persistence.Enumerated;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//@Entity
//@Table(name="role")
//public class Role {
//
//	@Id
//	@Column(name="ut_id")
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long ut_id;
//	
//	@Enumerated(EnumType.STRING)
//	@Column(length=20)
//	private String usr_type;
//	
//	
//	
//	public Role() {
//		
//		
//	}
//	
//	public Role(String usr_type) {
////		super();
//		this.usr_type = usr_type;
//	}
//
////   private String usr_type;
//   
//	public Long getUt_id() {
//		return ut_id;
//	}
//	public void setUt_id(Long ut_id) {
//		this.ut_id = ut_id;
//	}
//	public String getUsr_type() {
//		return usr_type;
//	}
//	public void setUsr_type(String usr_type) {
//		this.usr_type = usr_type;
//	}
//	
//	
//	
//}




import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private ERole name;

	public Role() {

	}

	public Role(ERole name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public ERole getName() {
		return name;
	}

	public void setName(ERole name) {
		this.name = name;
	}
}
