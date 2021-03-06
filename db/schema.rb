# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170427151553) do

  enable_extension "plpgsql"

  create_table "reviews", force: :cascade do |t|
    t.float    "overall_rating",                 null: false
    t.integer  "user_id",                        null: false
    t.integer  "site_id",                        null: false
    t.string   "design_body"
    t.string   "usability_body"
    t.string   "concept_body"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.integer  "vote_count",     default: 0
    t.boolean  "voted",          default: false
    t.index ["site_id"], name: "index_reviews_on_site_id", using: :btree
    t.index ["user_id"], name: "index_reviews_on_user_id", using: :btree
  end

  create_table "sites", force: :cascade do |t|
    t.string   "name",          null: false
    t.integer  "user_id",       null: false
    t.string   "url",           null: false
    t.text     "description",   null: false
    t.string   "collaborators"
    t.string   "github_url"
    t.string   "experience"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "image"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                               null: false
    t.string   "avatar"
    t.string   "city"
    t.string   "state"
    t.string   "country",                                null: false
    t.string   "github_url"
    t.string   "personal_url"
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.boolean  "admin",                  default: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  create_table "votes", force: :cascade do |t|
    t.integer "user_id",   null: false
    t.integer "review_id", null: false
    t.index ["review_id"], name: "index_votes_on_review_id", using: :btree
    t.index ["user_id"], name: "index_votes_on_user_id", using: :btree
  end

end
