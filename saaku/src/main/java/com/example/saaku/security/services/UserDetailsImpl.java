package com.example.saaku.security.services;

//import java.util.Collection;
//import java.util.List;
//import java.util.Objects;
//import java.util.stream.Collectors;
//import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//public class UserDetailsImpl implements UserDetails {
//	private static final long serialVersionUID =1L;
//	
//	private Long id;
//	
//	private String user_name;
//	
//	private String email;
//	
//	@JsonIgnore
//	private String password;
//	
//	private Collection authorities;
//
//	public UserDetailsImpl(Long id, String user_name, String email, String password,
//			Collection<? extends GrantedAuthority> authorities) {
//		super();
//		this.id = id;
//		this.user_name = user_name;
//		this.email = email;
//		this.password = password;
//		this.authorities = authorities;
//	}
//	
//	public static UserDetailsImpl build (User user) {
//		List<GrantedAuthority> authorities = user.getRoles().stream()
//				.map(role -> new SimpleGrantedAuthority(role.getName().user_name()))
//				.collect(Collectors.toList());
//		
//		return new UserDetailsImpl(
//				user.getId(),
//				user.getUsername(),
//				user.getPassword(),
//				user.getEmail(),
//				authorities);
//				
//	}
//	
//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//		return authorities;
//		
//		
//	}
//
//	public Long getId() {
//		return id;
//	}
//	
//	@Override
//	public String getUsername() {
//		return username;
//	}
//
//
//	public String getEmail() {
//		return email;
//	}
//
//	@Override
//	public String getPassword() {
//		return password;
//	}
//
//	
//	public boolean IsAccountNotExpired() {
//		return true;
//		
//	}
//	public boolean IsAccountNonLocked() {
//		return true;		
//	}
//	
//	@Override
//	public boolean isCredentialsNonExpired() {
//		return true;
//	}
//	
//	@Override
//	public boolean isEnabled() {
//		return true;
//	}
//	
//	@Override
//	public boolean equals(Object o) {
//		if(this == o)
//			return true;
//		if(o == null || getClass() != o.getClass())
//			return false;
//		UserDetailsImpl user =(UserDetailsImpl) o;
//		return  Objects.equals(id,user.id);
//	}
//
//	@Override
//	public java.util.Collection<? extends GrantedAuthority> getAuthorities() {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public String getUsername() {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public boolean isAccountNonExpired() {
//		// TODO Auto-generated method stub
//		return false;
//	}
//
//	@Override
//	public boolean isAccountNonLocked() {
//		// TODO Auto-generated method stub
//		return false;
//	}
//}		
//
//	




//package com.example.saaku.security.services;


import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;


import java.util.Collection;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import com.fasterxml.jackson.annotation.JsonIgnore;

public class UserDetailsImpl implements UserDetails {
	private static final long serialVersionUID = 1L;

	private Long id;

	private String username;

	private String email;

	@JsonIgnore
	private String password; 

	private Collection<? extends GrantedAuthority> authorities;

	public UserDetailsImpl(Long id, String username, String email, String password,
			Collection<? extends GrantedAuthority> authorities) {
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.authorities = authorities;
	}

	public static UserDetailsImpl build(com.example.saaku.model.User user) {
		List<GrantedAuthority> authorities = user.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName().name()))
				.collect(Collectors.toList());

		return new UserDetailsImpl(
				user.getId(), 
				user.getUsername(), 
				user.getEmail(),
				user.getPassword(), 
				authorities);
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public Long getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		UserDetailsImpl user = (UserDetailsImpl) o;
		return Objects.equals(id, user.id);
	}
}
