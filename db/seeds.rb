# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Site.create(name: "Facebook", user_id: 1, url: "www.facebook.com", description: "Facebook is an American for-profit corporation and an online social media and social networking service based in Menlo Park, California.", image: "https://www.seeklogo.net/wp-content/uploads/2016/09/facebook-logo-preview.png")

Site.create(name: "Twitter", user_id: 1, url: "www.twitter.com", description: "Twitter is an online news and social networking service where users post and interact with messages, tweeets, restricted to 140 characters. Registered users can post tweets, but those who are unregistered can only read them.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/1259px-Twitter_bird_logo_2012.svg.png")

Site.create(name: "Instagram", user_id: 1, url: "www.instagram.com", description: "A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.", image: "https://lh3.googleusercontent.com/aYbdIM1abwyVSUZLDKoE0CDZGRhlkpsaPOg9tNnBktUQYsXflwknnOn2Ge1Yr7rImGk=w300")

Site.create(name: "Apple", user_id: 1, url: "www.apple.com", description: "Apple is an American multinational technology company headquartered in Cupertino, California that designs, develops, and sells consumer electronics, computer software, and online services.", image: "http://www.everysecond.io/assets/Apple/Apple.svg")



admin_emma = User.new(username: 'emma', country: 'USA', email: 'emmalanctot@gmail.com', password: 'password1')
admin_emma.admin = true
admin_emma.save!

admin_tim = User.new(username: 'tim', country: 'USA', email: 'tavsx@mac.com', password: 'password2')
admin_tim.admin = true
admin_tim.save!

Review.create(id: 1, overall_rating: 5, user: brad, site: appful, design_body: "Amazing design!", usability_body: "Amazing functionality!", concept_body: "Amazing idea!")
