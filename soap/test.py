import requests
url="http://127.0.0.1:1337/testService"
headers = {'content-type': 'application/soap+xml'}
#headers = {'content-type': 'text/xml'}
body = """<SOAP-ENV:Envelope
  xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
  SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <SOAP-ENV:Body>
    <m:test1 xmlns:m="http://127.0.0.1:1337/testService">
      <myArg1>Soapy </myArg1>
      <myArg2>Hands</myArg2>
    </m:test1>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>"""

response = requests.post(url,data=body,headers=headers)
print response.content