*** Settings ***
Library  SeleniumLibrary
Library  RequestsLibrary
Test Teardown  Close Browser

*** Variables ***


*** Testcases ***
Add ซื้อข้าว
  Delete All Item
  เข้าไปยังหน้า index.html
  กรอกข้อมูล  ซื้อข้าว
  กดปุ่มเพิ่ม
  มีไอเทมเพิ่ม  ซื้อข้าว

Add sleep
  Delete All Item
  เข้าไปยังหน้า index.html
  กรอกข้อมูล  sleep
  กดปุ่มเพิ่ม
  มีไอเทมเพิ่ม  sleep

Add 19 length
  Delete All Item
  เข้าไปยังหน้า index.html
  กรอกข้อมูล  A234567890123456789
  กดปุ่มเพิ่ม
  มีไอเทมเพิ่ม  A234567890123456789

Add 20 length
  Delete All Item
  เข้าไปยังหน้า index.html
  กรอกข้อมูล  A2345678901234567890
  กดปุ่มเพิ่ม
  มีไอเทมเพิ่ม  A2345678901234567890

*** Keywords ***
เข้าไปยังหน้า index.html
  Open Browser  http://workshop.democnc.com
  ...  browser=Chrome
  Maximize Browser Window

กรอกข้อมูล 
  [Arguments]  ${name}
  Input Text  id:todoName  ${name}

กดปุ่มเพิ่ม
  Click Element  id:btnAdd

มีไอเทมเพิ่ม
  Wait Until Page Contains Element  xpath://*[@id="todoList"]/div[1]/div/div

Delete All Item
  Create Session  api  http://workshopapi.democnc.com
  ${resp}=  Delete Request  api  /api/todo
  Should be equal  ${resp.status_code}  ${200}
  