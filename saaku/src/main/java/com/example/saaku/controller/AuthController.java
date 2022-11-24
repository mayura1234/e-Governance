package com.example.saaku.controller;
//
//import java.util.Set;
//import java.util.stream.Collectors;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.support.BeanDefinitionDsl.Role;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.saaku.model.response.JwtResponse;
//import com.example.saaku.repository.RoleRepository;
//import com.example.saaku.repository.UserRepository;
//import com.example.saaku.security.jwt.JwtUtils;
//import com.example.saaku.security.services.UserDetailsImpl;
//
//@CrossOrigin("http://localhost:3000")
//@RestController
//@RequestMapping("/api/auth")
//public class AuthController {
//	@Autowired
//	AuthenticationManager authenticationManager;
// 
//	@Autowired
//	UserRepository userRepository;
//	
//	@Autowired
//	RoleRepository roleRepository;
//	
//	@Autowired
//	PasswordEncoder encoder;
//	
//	@Autowired
//	JwtUtils jwtUtils;
//	
//	@PostMapping("/signin")
//	public 	ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest){
//		
//		Authentication authentication = authenticationManager.authenticate(
//				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),loginRequest.getPassword()));
//		
//		SecurityContextHolder.getContext().setAuthentication(authentication);
//		String jwt  = jwtUtils.generateJwtToken(authentication);
//		
//		UserDetailsImpl	 userDetails = (UserDetailsImpl) authentication.getPrincipal();
//		List<String> roles =userDetails.getAuthorities().stream()
//				.map(item ->item.getAuthority())
//				.collect(Collectors.toList());
//		
//		return ResponseEntity.ok(new JwtResponse(jwt,
//				userDetails.getId(),
//				userDetails.getuser_name(),
//				userDetails.getemail(),
//				roles));
//		}
//	
//	@PostMapping("/signup")
//	public 	ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest){
//		if(userRepository.existsByUsername(SignupRequest.getUsername())) {
//			return ResponseEntity
//					.badRequest()
//					.body(new MessageResponse("ERROR : UserName already exists...."));
//			}
//		if(userRepository.existsByEmail(signUpRequest.getEmail())) {
//			return ResponseEntity
//					.badRequest()
//					.body(new MessageResponse("ERROR : Email already exists...."));
//		}
//		User user = new User(SignUpRequest.getUsername(),
//				signUpRequest.getEmail(),
//				encoder.encode(signUpRequest.getPassword)));
//				
//				Set<String> strRoles = signUpRequest.getRole();
//				Set<Role> roles = new HashSet<>();
//				
//			if(strRoles == null) {
//				Role userRol =roleRepository.findByName(ERole.ROLE_USER)
//						.orElseThrow(() -> new RuntimeException("Error : Role is not Found..."));
//				roles.add(userRole);
//			}else {
//				strRoles.forEach(role -> {
//					
//				switch(role) {
//					case "GRO":
//						Role GRORole = roleRepository.findByName(ERole.ROLE_GRO)
//						.orElseThrow(() -> new RuntimeException("ERROR : Role is not found..."));
//						roles.add(GRORole);
//						break;
//						
//					case "RO":
//						Role RORole= roleRepository.findByName(EROle.ROLE_RO)
//						.orElseThrow(() -> new RuntimeException("ERROR : Role is not found..."));
//						roles.add(RORole);
//						break;
//						
//					case "USR":
//						Role USRRole=roleRepository.findByName(ERole.ROLE_USR)
//						.orElseThrow(()-> new RuntimeException("ERROR : Role is not found..."));
//						roles.add(USRRole);
//					}
//				});
//	
//			}
//			user.setRoles(roles);
//			userRepository.save(user);
//			
//			return RepositoryEntity.ok(new MessageResponse("User Registered Successfully...!"));
//				
//	}
//}

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.saaku.model.ERole;
import com.example.saaku.model.Role;
import com.example.saaku.model.User;
import com.example.saaku.payload.request.LoginRequest;
import com.example.saaku.payload.request.SignupRequest;
import com.example.saaku.payload.response.JwtResponse;
import com.example.saaku.payload.response.MessageResponse;
import com.example.saaku.repository.UserRepository;
import com.example.saaku.repository.ComplaintRepository;
import com.example.saaku.repository.RoleRepository;
import com.example.saaku.security.jwt.JwtUtils;
import com.example.saaku.security.services.UserDetailsImpl;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;
	
	

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(jwt, 
												 userDetails.getId(), 
												 userDetails.getUsername(), 
												 userDetails.getEmail(), 
												 roles));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		User user = new User(signUpRequest.getUsername(), 
							 signUpRequest.getEmail(),
							 encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "GRO":
					Role GRORole = roleRepository.findByName(ERole.ROLE_GRO)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(GRORole);

					break;
				case "RO":
					Role RORole = roleRepository.findByName(ERole.ROLE_RO)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(RORole);

					break;
				default:
					Role userRole = roleRepository.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			});
		}

		user.setRoles(roles);
		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
}