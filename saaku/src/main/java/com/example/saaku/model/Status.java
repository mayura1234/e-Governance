package com.example.saaku.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Satus")
public class Status {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String sts;
	
	private Date stdate;
	
	@ManyToOne
	private Complaints com;
	
	@ManyToOne
	private User uss;
	
	private String feedback;

	public Status() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Status(Long id, String sts, Date stdate, Complaints com, User uss, String feedback) {
		super();
		this.id = id;
		this.sts = sts;
		this.stdate = stdate;
		this.com = com;
		this.uss = uss;
		this.feedback = feedback;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSts() {
		return sts;
	}

	public void setSts(String sts) {
		this.sts = sts;
	}

	public Date getStdate() {
		return stdate;
	}

	public void setStdate(Date stdate) {
		this.stdate = stdate;
	}

	public Complaints getCom() {
		return com;
	}

	public void setCom(Complaints com) {
		this.com = com;
	}

	public User getUss() {
		return uss;
	}

	public void setUss(User uss) {
		this.uss = uss;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	
	
	
}
