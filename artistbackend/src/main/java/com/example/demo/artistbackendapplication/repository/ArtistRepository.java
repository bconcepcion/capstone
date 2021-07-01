package com.example.demo.artistbackendapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.artistbackendapplication.model.Artist;



@Repository
public interface ArtistRepository extends JpaRepository<Artist, Integer> {

}
