# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Activity.destroy_all
User.destroy_all
Resort.destroy_all

puts "Seeding Users..."

  daniel = User.create(
    full_name: 'Daniel Sheehan',
    username: 'dsheehan',
    email: 'daniel@gmail.com',
    password_digest: BCrypt::Password.create('daniel01'),
  )

sample = User.create(
    full_name: 'Sample',
    username: 'sample',
    email: 'sample@gmail.com',
    password_digest: BCrypt::Password.create('sample01'),
    )
    
    
    
    puts "Seeding Resorts..."
    
    snowshoe = Resort.create(
        {
            name:"Snowshoe Mountain Resort",
            address:"10 Snowshoe Dr, Snowshoe, WV 26209",
            rating: 10
        }
        
        )
    
    example = Resort.create(
            {
                name:"Test",
                address:"10 Test Dr",
                rating: 5
            }
            
         )
    
        
    puts "Seeding Activities..."

        Activity.create(
        [
            {
                user_id: daniel.id,
                resort_id: snowshoe.id,
                description: 'Pickup rentals',  
                checked: true, 
                date: 'January 1'
            }, 
            {
                user_id: daniel.id,
                resort_id: snowshoe.id,
                description: 'Pickup lift passes', 
                checked: true, 
                date: 'January 1'
            }, 
            {
                user_id: daniel.id,
                resort_id: snowshoe.id,
                description: 'etc',
                checked: false, 
                date: 'January 1'
            }
        ]
        )
        
        
        puts "🌱🌱🌱 DONE SEEDING! 🌱🌱🌱"