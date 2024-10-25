package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// var db *gorm.DB

// type MenuItem struct {
//     gorm.Model
//     Name       string `json:"name"`
//     Price      string `json:"price"`
//     CategoryID uint   // to represent the foreign key
// }

// type MenuCategory struct {
//     gorm.Model
//     Title string `json:"title"`
//     MenuItems []MenuItem `gorm:"foreignKey:CategoryID"`
//     MenuID    uint
// }

// type Menu struct {
//     gorm.Model
//     MenuCategories []MenuCategory `gorm:"foreignKey:MenuID"`
// }

// +++++++++++++++++++++++++++++++++  when I do not have database ++++++++++++++++++++++++++++++++++++++
type MenuItem struct {
    Name  string `json:"name"`
    Price string `json:"price"`
}

type MenuCategory struct {
    Title string     `json:"title"`
    Data  []MenuItem `json:"data"`
}

var menu = []MenuCategory{
    {
        Title: "Appetizers",
        Data: []MenuItem{
            {"Kofta", "$6.00"},
            {"Eggplant Salad", "$8.50"},
        },
    },
    {
        Title: "Main Dishes",
        Data: []MenuItem{
            {"Lentil Burger", "$10.00"},
            {"Smoked Salmon", "$14.00"},

        },
    },
    {
        Title: "Sides",
        Data: []MenuItem{
            {"Fries", "$3.00"},
            {"Buttered Rice", "$3.00"},
        },
    },
    {
        Title: "Desserts",
        Data: []MenuItem{
            {"Baklava", "$3.00"},
            {"Tartufo", "$3.00"},

        },
    },
}
// +++++++++++++++++++++++++++++++++ . when I do not have database ++++++++++++++++++++++++++++++++++++++


// var secretKey = []byte("your-secret-key")   // to generate s secret key for testing

func main() {

    // var err error
    // db, err = gorm.Open(postgres.Open("host=127.0.0.1 port=5432 user=Asefeh dbname=LittleLemon password=Asefeh sslmode=disable"), &gorm.Config{})
    // if err != nil {
    //     panic("Failed to connect to the database")
    // }

    // db.AutoMigrate(&MenuItem{}, &MenuCategory{}, &Menu{})

	router := gin.Default()

    router.GET("/api/login", gin.BasicAuth(gin.Accounts{
        "Asefeh": "password",
    }), func(context *gin.Context) {
        context.String(http.StatusOK, "Login Successful!")

        // // Generate a JWT token upon successful login
        // tokenString, err := createToken("Asefeh")
        // if err != nil {
        //     context.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create token"})
        //     return
        // }
        // // Return the token in the response
        // context.JSON(http.StatusOK, gin.H{"token": tokenString})
    })

    router.GET("/api/menu_items", basicAuth ,getMenu)  
    router.Run(":1010")
}



func basicAuth(c *gin.Context) {
	// Get the Basic Authentication credentials
	user, password, hasAuth := c.Request.BasicAuth()
	if hasAuth && user == "Asefeh" && password == "password" {
        print("Successfully authenticated")
        return		
	} else {
		c.Writer.Header().Set("WWW-Authenticate", "Basic realm=Restricted")
        c.AbortWithStatusJSON(http.StatusForbidden, gin.H{"message": "Authentication failed"})
		return
	}
}

// func createToken(username string) (string, error) {
//     // Create a new token object
//     token := jwt.New(jwt.SigningMethodHS256)

//     // Set claims (payload) for the token, typically including user information
//     claims := token.Claims.(jwt.MapClaims)
//     claims["username"] = username
//     claims["exp"] = time.Now().Add(time.Hour * 24).Unix() // Token expiration time

//     // Sign the token with the secret key
//     tokenString, err := token.SignedString(secretKey)
//     if err != nil {
//         return "", err
//     }

//     return tokenString, nil
// }

// ========== When I do not have database and I defined menu variable and filled it by hand ==========
func getMenu(c *gin.Context) {
    c.JSON(http.StatusOK, menu)
}
// ====================================================================================================

// func getMenu(c *gin.Context) {
//     var menu []Menu

//     // Query the Menu data along with its related MenuCategories and MenuItems
//     if err := db.Preload("MenuCategories.MenuItems").Find(&menu).Error; err != nil {
//         c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch menu data"})
//         return
//     }

//     c.JSON(http.StatusOK, menu)
// }