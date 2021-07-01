package com.example.demo.artistbackendapplication.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.artistbackendapplication.model.Artist;
import com.example.demo.artistbackendapplication.repository.ArtistRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class ArtistController {
	
	@Autowired
	private ArtistRepository artistRepo;
	
	@GetMapping("/artists")
	public List<Artist> getAllArtist(){
		return artistRepo.findAll();
	}
	
	@PostMapping("/artists")
	public Artist createArtist(@RequestBody Artist artist) {
		return artistRepo.save(artist);
	}
	

}
	



