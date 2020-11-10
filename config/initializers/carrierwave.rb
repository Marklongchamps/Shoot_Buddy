CarrierWave.configure do |config|
  if !Rails.env.test?
    config.fog_credentials = {
      provider: "AWS",
      aws_access_key_id: ENV["AKIAYALLUHXACVI3Q5XM"],
      aws_secret_access_key: ENV["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"]
    }
    config.fog_directory  = ENV["S3_BUCKET"]
  end
end