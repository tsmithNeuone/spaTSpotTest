class ResultsController < ApplicationController
  def index
    @address = params[:address]
    
    @vendor_type = params[:vendor_type]
  end
end
