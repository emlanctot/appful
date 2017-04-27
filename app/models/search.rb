class Search < ApplicationRecord

  def self.search(query)
    where("name ilike ?", "%#{query}%")
  end

end
