using Downloads, CSV

URL =
http_response = Downloads.download(url)
file = CSV.File(http_response)
