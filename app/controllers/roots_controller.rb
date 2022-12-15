class RootsController < ApplicationController
  before_action :set_root, only: %i[show edit update destroy]

  # GET /roots or /roots.json
  def index
    @roots = Root.all
  end
end
