package com.food.backend.entity;

import java.util.Set;

import javax.persistence.*;

@Entity
@Table (name="restaurtant")
public class Restaurtant {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "id")
	    private Long id;

	    @Column(name = "restaurantname")
	    private String restaurantname;
	    
	    @Column(name = "restype")
	    private String restype;
	    
	    @Column(name = "ratings")
	    private String ratings;
	    
	    @Column(name = "pricetag")
	    private String pricetag;
	    
	    @Column(name = "imageurl")
	    private String imageurl;
	    
	    public Set<Dishes> getDishes() {
			return dishes;
		}



		public void setDishes(Set<Dishes> dishes) {
			this.dishes = dishes;
		}

		@Column(name = "time")
	    private String time;
	    
	    @OneToMany(cascade = CascadeType.ALL, mappedBy="category")
	    private Set<Dishes> dishes;
	    
		public Restaurtant() {
		}


		public Restaurtant(Long id, String restaurantname, String restype, String ratings, String pricetag,
				String imageurl, String time, Set<Dishes> dishes) {
			super();
			this.id = id;
			this.restaurantname = restaurantname;
			this.restype = restype;
			this.ratings = ratings;
			this.pricetag = pricetag;
			this.imageurl = imageurl;
			this.time = time;
			this.dishes = dishes;
		}



		public String getImageurl() {
			return imageurl;
		}



		public void setImageurl(String imageurl) {
			this.imageurl = imageurl;
		}



		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getRestaurantname() {
			return restaurantname;
		}

		public void setRestaurantname(String restaurantname) {
			this.restaurantname = restaurantname;
		}

		public String getRestype() {
			return restype;
		}

		public void setRestype(String restype) {
			this.restype = restype;
		}

		public String getRatings() {
			return ratings;
		}

		public void setRatings(String ratings) {
			this.ratings = ratings;
		}

		public String getPricetag() {
			return pricetag;
		}

		public void setPricetag(String pricetag) {
			this.pricetag = pricetag;
		}

		public String getTime() {
			return time;
		}

		public void setTime(String time) {
			this.time = time;
		}
	    
}
