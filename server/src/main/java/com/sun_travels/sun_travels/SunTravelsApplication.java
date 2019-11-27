package com.sun_travels.sun_travels;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.sun_travels.sun_travels.repository")
@SpringBootApplication
public class SunTravelsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SunTravelsApplication.class, args);
	}

}
