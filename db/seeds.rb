# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Site.create(name: "Facebook", user_id: 1, url: "www.facebook.com", description: "Facebook is an American for-profit corporation and an online social media and social networking service based in Menlo Park, California.", image: "http://www.pngmart.com/files/3/Facebook-Logo-PNG-Clipart.png")

Site.create(name: "Twitter", user_id: 1, url: "www.twitter.com", description: "Twitter is an online news and social networking service where users post and interact with messages, tweeets, restricted to 140 characters. Registered users can post tweets, but those who are unregistered can only read them.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/1259px-Twitter_bird_logo_2012.svg.png")

Site.create(name: "Instagram", user_id: 1, url: "www.instagram.com", description: "A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.", image: "https://lh3.googleusercontent.com/aYbdIM1abwyVSUZLDKoE0CDZGRhlkpsaPOg9tNnBktUQYsXflwknnOn2Ge1Yr7rImGk=w300")

Site.create(name: "Apple", user_id: 1, url: "www.apple.com", description: "Apple is an American multinational technology company headquartered in Cupertino, California that designs, develops, and sells consumer electronics, computer software, and online services.", image: "http://www.everysecond.io/assets/Apple/Apple.svg")

Site.create(name: "Netflix", user_id: 1, url: "www.netflix.com", description: "Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more. Start your free trial today.", image: "http://vignette4.wikia.nocookie.net/marvelcinematicuniverse/images/a/a1/Netflix-logo.png/revision/latest?cb=20150221002257")

Site.create(name: "Amazon", user_id: 1, url: "www.amazon.com", description: "Amazon.com, also called Amazon, is an American electronic commerce and cloud computing company that was founded on July 5, 1994, by Jeff Bezos and is based in Seattle, Washington.", image: "http://logonoid.com/images/amazon-logo.png")

-----

Site.create(name: "Github", user_id: 1, url: "www.githubcom", description: "GitHub is a web-based Git or version control repository and Internet hosting service. It offers all of the distributed version control and source code management functionality of Git as well as adding its own features.", image: "https://crossbrowsertesting.com/design/images/github-logo.png")

Site.create(name: "Tumblr", user_id: 1, url: "www.tumblr.com", description: "Tumblr is a microblogging and social networking website founded by David Karp in 2007, and owned by Yahoo! since 2013. The service allows users to post multimedia and other content to a short-form blog. Users can follow other users' blogs.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tumblr_Logo.svg/1280px-Tumblr_Logo.svg.png")

Site.create(name: "Slack", user_id: 1, url: "www.slack.com", description: "Slack is a cloud-based team collaboration tool founded by Stewart Butterfield. Slack began as an internal tool used by their company, Tiny Speck, in the development of Glitch, a now defunct online game.", image: "https://cdn.worldvectorlogo.com/logos/slack.svg")



admin_emma = User.new(username: 'emma', country: 'USA', email: 'emmalanctot@gmail.com', password: 'password1')
admin_emma.admin = true
admin_emma.save!

admin_tim = User.new(username: 'tim', country: 'USA', email: 'tavsx@mac.com', password: 'password2')
admin_tim.admin = true
admin_tim.save!

Review.create(id: 1, overall_rating: 5, user: brad, site: appful, design_body: "Amazing design!", usability_body: "Amazing functionality!", concept_body: "Amazing idea!")
