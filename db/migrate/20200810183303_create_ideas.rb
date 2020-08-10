class CreateIdeas < ActiveRecord::Migration[6.0]
  def change
    create_table :ideas do |t|
      t.string :title
      t.string :date
      t.string :notes
      t.string :img_url
      t.references :user, null: false, foreign_key: true


      t.timestamps
    end
  end
end
