class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :description
      t.boolean :checked
      t.string :date
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :resort, null: false, foreign_key: true

      t.timestamps
    end
  end
end
