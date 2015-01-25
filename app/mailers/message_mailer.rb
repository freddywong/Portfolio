class MessageMailer < ApplicationMailer
  default to: "Frederick Wong <frederick.kf.wong@gmail.com>"

  def new_message(message)
    @message = message
    
    mail subject: "Message from #{message.name}"
  end
end
