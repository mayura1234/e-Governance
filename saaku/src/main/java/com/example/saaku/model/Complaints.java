package com.example.saaku.model;

import java.sql.Blob;
import java.sql.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="Complaints")
public class Complaints {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@ManyToOne	
	private User us;
	
	@OneToMany(mappedBy="uss")
	private List<Status> status;
	
	public List<Status> getStatus() {
		return status;
	}

	public void setStatus(List<Status> status) {
		this.status = status;
	}

	private String descri;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date dte;
	
	private Blob imag;
	
	private String loct;
	
	

	public Complaints() {
//		super();
	}

	public Complaints(Long id, User us, String descri, Date dte, Blob imag, String loct) {
		super();
		this.id = id;
		this.us = us;
		this.descri = descri;
		this.dte = dte;
		this.imag = imag;
		this.loct = loct;
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

	public String getDescri() {
		return descri;
	}

	public void setDescri(String descri) {
		this.descri = descri;
	}

	public Date getDte() {
		return dte;
	}

	public void setDte(Date dte) {
		this.dte = dte;
	}

	public Blob getImag() {
		return imag;
	}

	public void setImag(Blob imag) {
		this.imag = imag;
	}

	public String getLoct() {
		return loct;
	}

	public void setLoct(String loct) {
		this.loct = loct;
	}
	
}
	
	
	
	