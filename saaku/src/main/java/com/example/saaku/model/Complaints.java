package com.example.saaku.model;

import java.sql.Blob;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Complaints")
public class Complaints {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@ManyToOne	
	private User us;
	
	@Column(name="Desc")
	private String Desc;
	
	@Column(name="date")
	private Date date;
	
	@Column(name="img")
	private Blob img;
	
	@Column(name="loc")
	private String loc;
	
	
	public Complaints() {
		
	}


	public Complaints(Long id, User us, String desc, Date date, Blob img, String loc) {
		super();
		this.id = id;
		this.us = us;
		this.Desc = desc;
		this.date = date;
		this.img = img;
		this.loc = loc;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public User getUs() {
		return us;
	}


	public void setUs(User us) {
		this.us = us;
	}


	public String getDesc() {
		return Desc;
	}


	public void setDesc(String desc) {
		Desc = desc;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public Blob getImg() {
		return img;
	}


	public void setImg(Blob img) {
		this.img = img;
	}


	public String getLoc() {
		return loc;
	}


	public void setLoc(String loc) {
		this.loc = loc;
	}

}