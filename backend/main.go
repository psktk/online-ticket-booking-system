package main

import (
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
)

type Venue struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Address  string `json:"address"`
	Capacity int    `json:"capacity"`
}

// Event represents a concert event
type Event struct {
	ID          int       `json:"id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Venue       string    `json:"venue"`
	Date        time.Time `json:"date"`
	Price       float64   `json:"price"`
	ImageURL    string    `json:"image_url"`
}

var mockVenues = []Venue{
	{
		ID:       1,
		Name:     "Madison Square Garden",
		Address:  "4 Pennsylvania Plaza, New York, NY 10001",
		Capacity: 20000,
	},
	{
		ID:       2,
		Name:     "Royal Albert Hall",
		Address:  "Kensington Gore, London SW7 2AP, United Kingdom",
		Capacity: 5272,
	},
	{
		ID:       3,
		Name:     "Wembley Stadium",
		Address:  "London HA9 0WS, United Kingdom",
		Capacity: 90000,
	},
	{
		ID:       4,
		Name:     "The O2 Arena",
		Address:  "Peninsula Square, London SE10 0DX, United Kingdom",
		Capacity: 20000,
	},
	{
		ID:       5,
		Name:     "MetLife Stadium",
		Address:  "1 MetLife Stadium Dr, East Rutherford, NJ 07073",
		Capacity: 82500,
	},
}

// Mock data for events
var mockEvents = []Event{
	{
		ID:          1,
		Title:       "Taylor Swift - Eras Tour",
		Description: "The most anticipated concert tour of the year! Experience all the eras of Taylor Swift's musical journey.",
		Venue:       "Madison Square Garden",
		Date:        time.Date(2025, 12, 15, 20, 0, 0, 0, time.UTC),
		Price:       150.00,
		ImageURL:    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
	},
	{
		ID:          2,
		Title:       "Ed Sheeran - Mathematics Tour",
		Description: "Join Ed Sheeran for an intimate acoustic performance featuring his greatest hits and new material.",
		Venue:       "Royal Albert Hall",
		Date:        time.Date(2025, 11, 28, 19, 30, 0, 0, time.UTC),
		Price:       95.00,
		ImageURL:    "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=500",
	},
	{
		ID:          3,
		Title:       "Metallica - World Tour 2025",
		Description: "The metal legends return with a thunderous performance of classic hits and new tracks.",
		Venue:       "Wembley Stadium",
		Date:        time.Date(2025, 12, 5, 21, 0, 0, 0, time.UTC),
		Price:       120.00,
		ImageURL:    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500",
	},
	{
		ID:          4,
		Title:       "Billie Eilish - Happier Than Ever Tour",
		Description: "An unforgettable night with the Grammy-winning artist performing her latest album and fan favorites.",
		Venue:       "The O2 Arena",
		Date:        time.Date(2025, 11, 20, 20, 30, 0, 0, time.UTC),
		Price:       85.00,
		ImageURL:    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500",
	},
	{
		ID:          5,
		Title:       "The Weeknd - After Hours Till Dawn",
		Description: "Experience The Weeknd's mesmerizing performance in this spectacular stadium show.",
		Venue:       "MetLife Stadium",
		Date:        time.Date(2025, 12, 22, 20, 0, 0, 0, time.UTC),
		Price:       110.00,
		ImageURL:    "https://images.unsplash.com/photo-1571974599782-87624638275c?w=500",
	},
}

// Handler for GET /events
func getEvents(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"data":    mockEvents,
		"message": "Events retrieved successfully",
	})
}

// Handler for GET /events/:id
func getEventByID(c *gin.Context) {
	id := c.Param("id")

	for _, event := range mockEvents {
		if event.ID == parseID(id) {
			c.JSON(http.StatusOK, gin.H{
				"data":    event,
				"message": "Event retrieved successfully",
			})
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{
		"error": "Event not found",
	})
}

// Helper function to parse string ID to int
func parseID(id string) int {
	switch id {
	case "1":
		return 1
	case "2":
		return 2
	case "3":
		return 3
	case "4":
		return 4
	case "5":
		return 5
	default:
		return 0
	}
}

func main() {
	r := gin.Default()

	// Enable CORS for frontend integration
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	// Health check endpoint
	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "ok"})
	})

	r.GET("/venues", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"data":    mockVenues,
			"message": "Venues retrieved successfully",
		})
	})

	// Event routes
	r.GET("/events", getEvents)
	r.GET("/events/:id", getEventByID)

	r.Run() // listen and serve on 0.0.0.0:8080
}
