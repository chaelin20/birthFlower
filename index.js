const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/flower/:date', function (req, res) {
    const { date } = req.params

    if (date == '0101') {
        res.json({'flower': '스노우드롭(Snowdrop)',
        'image':'https://blogfiles.pstatic.net/20140101_299/akekdthkl200_1388570245031uhXbz_JPEG/2014-01-01_18%3B23%3B39.jpg?type=w2'})
    }
    else if(date == '0102') {
        res.json({'flower': '수선화(Daffodil)',
        'image':'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQawPGSMsNKwkk_-AR7PY4wH3uo1_UCR14D2vJ1GbpeY6Bagwjf'})
    }
    else if(date == '0103') {
        res.json({'flower': '샤프란(Safran)',
        'image':'https://t1.daumcdn.net/cfile/tistory/993852495A4B999343'})
    }
    else {
        res.json({'flower': '옳은 값을 입력해주세요.'})
    }
  })

app.listen(3000)