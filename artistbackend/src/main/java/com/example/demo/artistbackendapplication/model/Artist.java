package com.example.demo.artistbackendapplication.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Artists")
public class Artist {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "artist_name")
		private String name;
		@Column(name = "id")
		private int id;
		@Column(name = "artist_type")
		private String type;
		@Column(name = "manager")
		private String manager;
		@Column(name = "contract")
		private String contract;

		public Artist() {
			super();
		}
		
		public Artist(String name, int id, String type, String manager, String contract) {
			super();
			this.name = name;
			this.id = id;
			this.type = type;
			this.manager = manager;
			this.contract = contract;
			
		}
		
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public long getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getType() {
			return type;
		}
		public void setType(String type) {
			this.type = type;
		}
		public String getManager() {
			return manager;
		}
		public void setManager(String manager) {
			this.manager = manager;
		}
		public String getContract() {
			return contract;
		}
		public void setContract(String contract) {
			this.contract = contract;
		}
}


