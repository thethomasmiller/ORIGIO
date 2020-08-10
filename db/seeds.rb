# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Idea.destroy_all
User.destroy_all

@admin = User.create!(name: 'Thomas', username: 'admin', email: 'admin@email.com', password: '123456')
puts "#{User.count} users created"

@new_idea = Idea.create!(
  title: 'New Idea', 
  date: '8/10/2020', 
  notes: 'This is a new idea.', 
  img_url:'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', 
  user_id: @admin.id)

puts "#{Idea.count} ideas created"

@first_comment= Comment.create!(body: 'Great idea!', user_id: @admin.id, idea_id: @new_idea.id)

@new_idea.comment.push(@first_comment)

puts "#{Comment.count} comments created"