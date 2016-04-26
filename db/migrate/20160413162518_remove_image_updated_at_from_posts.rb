class RemoveImageUpdatedAtFromPosts < ActiveRecord::Migration
  def change
    remove_column :posts, :image_updated_at, :datetime
  end
end
