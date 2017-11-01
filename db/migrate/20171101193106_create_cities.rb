class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :image
      t.string :country
      t.string :region

      t.timestamps
    end
  end
end
