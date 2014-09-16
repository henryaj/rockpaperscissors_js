require 'sinatra'

class RPSApp < Sinatra::Base

	get '/' do
		erb :index	
	end

end