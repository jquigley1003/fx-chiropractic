class RemoveImageFromPosts < ActiveRecord::Migration
  def change
    remove_column :posts, :image_file_name, :string
    remove_column :posts, :image_content_type, :string
    remove_column :posts, :image_file_size, :integer
  end
end
