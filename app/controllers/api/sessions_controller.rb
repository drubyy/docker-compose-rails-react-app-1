class Api::SessionsController < Devise::SessionsController
  def respond_with resource, _opts = {}
    render json: {
      id: resource.id,
      email: resource.email
    }
  end
end
