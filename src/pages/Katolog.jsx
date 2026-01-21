import React from "react";
import { Link } from "react-router-dom";

function Katolog() {
  return (
    <>
      <header className="bg-green-600 flex justify-between items-center p-[10px]">
        <h1 className="text-[50px] text-red-50">MAKRO</h1>
        <nav>
          <ul className="flex gap-[70px] text-[20px] text-amber-50">
            <li>
              <Link to="/catalog">Katalog</Link>
            </li>
            <li>
              <Link to="/aksiyalar">Aksiyalar</Link>
            </li>
            <li>
              <Link to="/dokonlar">Dokonlar</Link>
            </li>
            <li>
              <Link to="/yangiliklar">Yangiliklar</Link>
            </li>
            <li>Sodiqli kartasi</li>
            <li>Aloqa</li>
            <li>
              <Link to="makroishlash">Makroda ishlash</Link>
            </li>
          </ul>
        </nav>
      </header>

      <h1 className="text-5xl">
        {" "}
        <br /> Katolog
      </h1>

      <br />
      <div className="flex  flex-wrap justify-center gap-20 ">
        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10 bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnU2Ji-k-LaKh8artm-MYPdAfVINyntR72gQ&s"
            alt=""
          />
          <h1>qazi</h1>
          <h4>300000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            <Link to="/sale">Sotib olish</Link>
          </button>
        </div>
        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10  bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://media.istockphoto.com/id/1282866808/photo/fresh-raw-chicken.jpg?s=612x612&w=0&k=20&c=QtfdAhdeIGpR3JUNDmYFo6cN0el8oYMcOXMQI7Qder4="
            alt=""
          />
          <h1>Tovuq go'sht</h1>
          <h4>35000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            <Link to="/tovuqgosht">Sotib olish</Link>
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10  bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://api.cabinet.smart-market.uz/uploads/images/ff808181b308ad2561ddc2e4"
            alt=""
          />
          <h1>Go'sht kg</h1>
          <h4>150000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10  bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://kuldim.com/wa-data/public/shop/products/36/61/116136/images/35680/35680.970.jpg"
            alt=""
          />
          <h1>Rollton</h1>
          <h4>6000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10  bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXGRgYGBgYGBYYFhgYGhcXGhoXGhcYHSggGBolHRcXITEiJSkrLi4uFx8zODMtNygtLysBCgoKDg0OGhAQGy0mICUtLS0tKystLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tNf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAAIHAf/EAD8QAAECBAQDBgUCBQMCBwAAAAECEQADBCEFEjFBUWFxBhMigaHwMpGxwdEUQgdSYuHxI3KCJLIVM0NjkqLC/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEAQUABv/EAC0RAAMAAgIBBAECBAcAAAAAAAABAgMREiExBBNBUSIyYRQVUnEFM2KRwdHh/9oADAMBAAIRAxEAPwA7Iw5hcR5Wdm5cxBtBKZicsy7EaRUk4h4WeOKqW9HfqK1sXMM7J5ScrxNidLNl2vBzCMSSlZCjvGdosQQoMliYN6fYEuprQJwmnWsaR52iwtRQQeEFuz9chA8VomxytTMDJvC9V5RtNN6ZznBsN7smCRpULVpByVQhr2it+hZbhvSHapgqpRCMMAuIKycJdFzG6lHLZNuOsQ/rVAM9oLhryY7b/SLeMSpkouCSneLOC4jlIUbwUngTAygecCKjDwkeAt1gaW1+IeN6/UMlfj6ZiMiQ5MVsOlLl3NzwgLL8AsLgOToSeEX8LrlrllRCQc2UJzWLal2fW2ka+Mr8wXzr/L8FyrqFzbEN0MbUUsI+L6PG1OhR0DXux16mLKZVr328oROZN9IZWJ602V66aG6wKoqUKXm2EE5soaKfLu2o5jnGtDT5CUkvuCNCDoYcu+xVrS0WKaeELHKC1bXpUloTK8rlqJYmIKPFcxYmFJN7SCtJJNjbRzEJU5aIe0lfLMtgz8oBzJhO8EJFIgy3OsZTUdDfTx7i22c3xdJDl4FJnWgz2rGVRA0hYSsmL8Ncp2Reox8L0ezlF4tSKdxFFTvBCnWwhxMVp8hjHqHiWdNBi7SIS0aD48AOqJjyjUSWgjiqBtA6SCLx56PbbYdlyg0Da5ABjVVcYrzVFUCEaoIET98YhlSC+kFqagJGka6SCjHdeECSYyGAYITHkB7sfZT/AC/1H9I3U5mBYSTaGCZKKUODEUyiDgux5Xi4lRysWMRLHrsorM66AclClK1hgocLDXvEEuSkFwkesSmsa0e4IznX0BsbPdKASdTpGqsRy2F1egiritW69XPHgOXOKsqS8MmVK2zzTp9BCXVTF3Jf3tF2lSo2Zzq7x7R0WjQwUuHCzQqsrfgaomV2A56FEMSRFcOBc/OG00GsDanDg7RnOl5NngwWpTJKswYBzyAhbosVVOWs/wDpggJHG4cnm0Hq2hJStBdjYtwO0K2DUq5SlylFspUoniAPCYbiuXtic8UtJeAzVTco5lj5P7+UEMJlBmT089z/AHibCsCTNQmdPQpWYOlDkBKWsVNuYY6bBKYB0S1S1pIunMzG25IMKuebDnPGOdHtJS+GLApPSL0iUlADXAZ3eCCpSMpL9Y1YhFZ+xZqJKAlWYX1B+xgZLWzA7C3TcesE8Y3YdYBoW5bqOriAT/LQ/W42W6zItLNCbXdnJyVlcogjg9/kYb5pRLTd83B/s0D/ANYToGh86kQ07QDM6YgMoF4yVipZiWhhQkq1iGqwxC7KQk82v8xeApRb7G4+eNdCPj/iSTCxKEdUXgaGy7c/zC/iXZghQyDWH4aU/iT507fJicsARsZwaHuh7JyE3mAzVcHZPyGsGqXCJLMmVKA4ZE/cQ55EhKx0zkctDmLhUUCOpTcBplfFJR1SMp+aYX8c7DEpKqVRV/7aiH/4q/MeWSWDWKkc+m1OYxaQzRUn0ikKIUClQLEEMQYkpbkCDfQEdvRqKJS1MkQxYfgTAZtYL0FIgJDM8XpElnOsSZMtPpH0Xpf8Oxwt32wWnD0iwTFoSUoi6EiNK7AytlJX5Qhbp9nSyZMWCdpFX9QjjGQSpuy0pSQTMuecewXsr7Iv5r/pD1NLeLSqa3CKNOomwgrS3FxHqbbORK0DFSzt84EYjiLL7pPxAOo8Bw6w041PTTyVLYaeEHdWwEczw6e61qNyTr6/eCiPlhO99IJFLmCNDIG/kYoU8y8GKWW8Jy5PgpxxpB3C5DhjaGTD6ZhAHD5oZj75wdp6oAQOJoRm2TzQAYEVQ1MXJs93YQLn530hlMDGQzZfvnC1itOhMxKyQAXQX3cEj7ww1UzKPrCj2vrgmSF7pWgt5/5hUputIe+pbZ0HCqlgk6hmIAuzWPlBKon+FRAZk9Ln2IXcLr0BIK1AOlKk8wUghvnFwVqZnhRexfVixBDdYoltHMqdsty5hzNreJKquCRmVcfeBaphBNusDcQq1H4iOQF2/vGVWl0MxzypJm2IVZNzZ9BC5XVykqTkLKLNyA1V74xNiFcEglagPqYXMKru+mrmE2fKn/aPyftCYl/qZ0G51xGmRLUsuouTcmCEmmvpEVEpkg8frBCnDwT8C0+zeXTRvMpWi9JRBFOGkh9ecemG/BlZEvIqzpLQPqqfMRlN9G4iGLEZIDjhC7NmXglWjeHJbPaVJJZj74wRlySToRwtBDD6dPcpUgXPxbkHhfaJ1yCQGSCdXMG/BP7i3pFRGGk62jc0BSHBf3tBeXLLD8GMWnLvBzKAvJQi9t+zCKqUVoAFQkWOmZv2q+xjklFTLdTJJKLqH7gBqW5b8I75XNuftCjifZeWtapyfDOVYEFgoqGUgg2BL6iGq9LTFcfyVIS8PxBmcwek1QLMYWaeSQsoIukkeYLGC1Ih7ERPfTPqfT5FU9hfvI2E0jSIjIS1jECVHOwVAch/4MtD3rGR53UyMj3IX7eL9hgp1Xg1TKdiNR6wu0kx/vBKTNbfoY9s4KnZF27qAZMsDUqUT5D+8c6oleJQ5v8AP/EOHbWaSmWdxmf0hDEzLMCtjYxRNbkDjxYzUotxG4g5QzNNxC3Rz2LvByknoOpboPtEOWHstiuhgkzuHyMEaaaVlg8BqaZLZipSuenoXgxSqMtOeWM3Ut/cfKAxy99iM19BejolZmKrW2tf6xBMdSlD9qd9yeHL+0D67tQAAAC6v5b3fUnQM77RQpMXBClO2Zh5axQ6XhEszT3TNsTYH6RzLt/Wf6aUPcqfySD9zDliFcVmELHMOmVU90sEJ8KXdzxIA4n6Qfp9c9v4G5uSxa+WWuyf8QJkhKJSwlSU2dW4Gge5S2g2ZtNYaJeOyj/r58iVEoYAlJKQFEgiwssC+t/JEpOyE1ZsUtxu0HaXsgsIyd+oIzZmSGGZmcXfS0PyVi3vYjFiyNdjjVY1m8SVJuHO4f3xhSxvH1fvUABz+gic9lWZ5009VMI3T2VpEqBWgzD/AFKU31v5wqeD8voa8dT48iLiuNrmuHsYLdlZzADr9Yc04TLdkU8pKePdy/xE6MCkAXlAc0jIevh+8Mu4c8UZGO5rlTJaFdvtBqmXAJVAqXdJzIHHUdW+sXaWfEVVorU7Wxlp5zc4NyK8ZWB8jCfJqvekWP1doOMnEVeHkT4vUuq3vlC1V0q7kdeWsXlTyV+LSLpq0hkqA4BwR1EY1yHpvGtG3ZSvSEKSp3J5Nb/MMMtaHBcjqITaMd2pQF/E78Dw+0GZNQ9vT8QxV0kyLJiTp0hl7xA897GKOITBoSGOvICKIqUgEKsdo17yWT8YNm6+UOliKnQPragO4SwJct94wrz5HBDF3DeK1vfKJ6lKMzZHGtnNx0gZ2gxHuZYUqwObqEgOSw5tHtM1tPpHOu0eGqpqhRBstailkrAY3+IhjrtF/Alhzm3gZ2g7Rd/kS4LfEQ4TY+FgdCBYxcwwMBGWvs6fpm+JdqASfCktEUiWXHHnBuhS8XK3DEqTox4xLyOhNtEcmhmZR4YyKaMTmoGR3a0eQWkK5V9GUU57iCKJgI5cOEL8tWUuNIISqgbH8wNddEUL5Ne0Usqlg/yfJj7EJNXLv9YfluoEM77cYRsUSZalJU/J+G0Pw18C80/JDSV2UhKj0P2MEk4hl2hUqElamTFiQuakhPxjQA6+RiisKpE0eocvTHCnxsva0OOG1a1S7+Fwwex/MKuDYblZRur5gch+YPys5ISnU+fsxI8en0UVSpbZTp6RJUpzMPBmyluL3MQ1leJKgnIXBCiFMxFjtoCPrDTWUCkSipMyWhbhu8Yvx8I36vCCOy9VNnoVNHeUy1vNEt5a2LkkpIchz+1xtDMeBPyIv1OvgM1UpGZalTCmUrxSigBa5iVDMCkOAEgFionUEAFixenw/wABTKl5cxCXsZmX9xK2sSH0YRGaenQpKVrJKSfCUJQEyy+WShKXOVIBDXIuYY6OZKQmyhkYsS4IbY5mLgG+8FUa6kT7lPyCRRJBygDptEs6ZKkjNMPQbnkBvEWPV6aa5upTsPueUJH65c6bmUXPuw4CJpjb2ypX1oZe/KyVkAPoNgNgIsUsgqVpFan0Ai/RzmVbWCbGyjWdXBEwykgFQDtuo7C29omwWr/UJJKMimdruzkBwQCCWJaNKzCiuZnA8RILixfi43gtg2DKQStRLnb118zHkxeRlZUvLt1gLXI7pdvhVccuXv7Q0V8t4We1I/6VahqgBY8jf0eApcugsdtGSp7xN3toScNx4HeC6cXSdxAOGn2UqlXgJzali5vAk4ytSjLAD8S7eZH4jKqYtSFLShSgA9rP04wHp6x/HZj6f3hsT8sXbfwOVBPLtqRqwtBUVV2Ac+cJuHVuQ5io30S/xc3I06Rdk4qSfiPzYDlb7wVSITGybUEByn8xUl4jLJUQoAoPjTuBx5jbrC5iKkrkqASFLU+Vh4wWsQerQIoqGc+WcXYhRSGLqsCFG+bZwOMMiN9i7pJHTFV8pKc+YBBKbga52KWDcxCJ/FStmZZaUpUJZBKlAWYsySduLdIO4LI/0yjOFMWGYAKAuoDgSku3I8oKqlqWjLMlyloUkoVuUpy6AnQW0A4Q5dEyrT2cFkHxCGqhm2EbdreyRkKVOkh5LglIuqU/FiXRwMD8PnC14zL2jo+mrY6YQu4vDXUEd21nhDo57Xi/OxGYoMm8RsuabaNqj4jGRVM1W6TGRmw9geVUFKihRYv0fmItCddwWaOnTuw1Gp+8RmfcqLjpeB0/+HVMWMpa0AG4fNmF9H0iuvTU0c2vXYd6QsYdiAs+o3iPtPTImycybzE6buNwRDPK/h4hJJVOUU7MwPnAftBgaqZaRT5Jzi4mq+AuGUQn4hyMejDUk2TNNv8AE572ew1a6hCikiUSTmI8BCbkPodGhxlJlKUe7QkAG6mAc8uUWqyjnTEpQkoCBs7PzYBhrpEcrDpspDZX4keL6QVVvyLxw99l2SzsIY8EoVKKmAsHJLkcgwudNB94Xez6kGclClNmsCePB+ekOeKYuihld2A82bmPhIdAL+IjVgGAO5bnAT29sLM3+lCzitOZsxYKyiWhQdas2V3YZCwckm2XjBCUUyUpRLGVmBuCVNxP825PNucDpM9TAncMlJJLDdZO6tn6nhFunpBsAABZrawt39BrHv8AUaplSzmBkyyFC7pBJezkkOSx1gjLqdUqTbgbj5u4tuL9Y0/TC7D/AAwjYAvAq2E8cvwKPbDA502aZktXeAiyCRnAAJZH8+hsL9YVsHXudQpvT+0dMrUEM2n1EKnaDC8qzUI0U3ejmSAJnVyAeoPGNV72glDlp/BakLcCL1Gq8B6CdtBLvYRtlWhnoKqDMmrSpQQ/iU7DkNT05wlIrMoDxtIxFeZ02JDPu2rchp8odiTfkkzL+kZ8QSyinZnd39IXcbpnlTUHRSF/IpMQ/qJii5Jf3tGs2oWoEG4ZiDuIJyt9GRNa7EXAuyyQAV+I/wD1Hlv5w10+DpFgAPIfiLtNKTtY8NvIxeSW2hWW8je2V4YiZ1IORQqABCjAqs7Mh1LlpGdV8pKggnewNieN4cKdQylOUZiU5VcL/QxclYUmYkFCgDo4J14F3+0NxTTW0xGbLKemcPxConzahSTLUmb/ACAFkgWAH9IDMYP4Zgc1nmLy/wBIufnD9O7OzpcwlYzlvjA8J5cmvaNpcphcAH6RS1+xIsu352LtLISAwKgeNni3Jl5QwUX1HL5cY8qkOtxqPpE0pzCeaRX7e12Q/qZ6QR4WO4D+vHrEoq5lrlvz/iLLNZwREtNThRYWVw49Ix0zOEryiellS5rEpAmJcBQ8KmOoBF/KObdr8KMipzggomupLAJYhgpJAADve3GOgTJakEK0I24xRx+iE+WuUWCiMyCf2r2vwe3QwavfQMxwrkvAgoq7ZYM0C8u8KuHuFHNYizcDwgrIqDnHCFXOujo46bWxpE48IyNJM7wiMhOkGeYXMxBKRnn92kCyVspTbOPyYO0mNzZQJXNUve4CUjkANoH4nXSZTqmqzeJmuVFhcBjqHBvAvEcQTNCcicqVZWBABZnctpbaLttLaOS9ZK0y4nEpqpq565i88x7ZlZUIJskJBZ9I8E1zbzigpTmL9HLcs0T5MukVY8K8l6QSYIyJfl0jeio/nBBFMYkeShlKUC5lNqcqS+oUlKknqFCFlFJNTNUlnKiCG0y2ACeQJ0HKHSoQ0B6tL7kEaEag8Rzj2PO09MW8XLtGS/8AzDy8LcPbQYpg/wAh9IDomOkBgFoBchg4sxYAWDsOQZyQYNYcHt0+kUv9hK8dl6nQ7e9/wY9m05bpF3D6fw9D9YvKonD7RqxsB5Uhbnyn+o+8DO4BJQoApUCkg6FJDEGHNUtLMQHBgLiVKEknbXoIFy09npzJ9HMqr/p5ipSlPl0O5SXCSediDzSYylxULVlTci/IecC/4l4mibNQqUXyuFEWBJPqHBPnE3ZeQUykqPxLGbyOnpfzh3srXIJZ23xGKRLcwURLZooU0F5CSWhd1roZMm9PIcnpFk0TwQpaTSCiMPtpAJNmO1LE1cjL5RLIuQONoLYlSsdIFTAzcoHlrpjl+S2gX2mx80igiXlKxdWYOAP5SOJHyBi9h/aagVcmbLWrVx4bs6cyXNjvaObdppiv1MwKU5KySTqXLj0IghQmSUozMSVgG5Ja72ipamdIkyRzeztVDjKVIsrMOesL+JTEuVE2gZgE8IkLnfsdQQC1rn56iI6eeZmpt6QVW9aYicSTbLlHQ5iFPq9gAfUn7QU/8LADkekb4dLQFBrj6QyiQgptaBUJoL3WhMqaMgH2YoklJBG1xxENWIU7Qs4iz2iZviy3H+aLtdUBaEq3Yu3HeA3ecw7DSNBVMg33IbyEU++35AekFy7CUdaEftIBLqprWBVm/wDkAfqTGUiwWgx2vwkqV3o3A9AIXZEthDm1SGwqWhilTVMLxkDETi0eQniUdkOJ1CFzgiWVFDhIc5tAHUD/ACm7DhBpKczqZgBbzLfaE6jUe+SXs5/7TDtTmwHJP0MXZepODgf5NssU6XaD+HSgIB0y7vtB6iXpHMy9s6yrUjBRDT6QaFGGvrwgLh6201hippg3gsUJ+SPNT2B66nhcrZN4eK1IaFutkak+UIz4+NdFPp8nJdgSRKci5FikkWOUjXyUEnyI3g5QTQGDdfpAZa8qokkVJcXdnHmDB4sm519AZ409/Y40lQwPveCIq3S3OFimqHBi5KqLi+n19tFM5dEDlNlmpmeI+cc//iJ2m0pkG7DvD6hHyueohsxHEEykTJyjZIKj5D/EcQxGYqZLXVKV4jOCCOJUhayQX2YD/kIPHPJ7CvSBmLzHEPD5FBI0SEjyAAjnFROeOihTqJ3Jh2bqUjPTtVbYdoQCfUQxUcrxQsYZNZidrGGinnjXn+D94ksr2NWHywEnrBgFITC3Jqw2vCLK63w67QcZFKI8mJ0yvi7E+cLdaNYKT6gEHjaA9YuIstbro6WBcZ0zlHbWcP1i/wDh/wBiYmw2qBABgL2hnmbVTVJBLrIAFyQLD6QVwnBJ6mJyy/8Aeb/IAn5tHWrH+CIoy7tjnUVeWTTyR8OXvD1USz9GizRT7ZTrtzHARXrKBKyhSZhTlTl+EF7kiz2sWjWnojmDTEkPpcEtzuHhGRPfQUJa7HPC54KQfLmOsF0YkAGV5GEmoXOTokjTdJD8ym2v1izTV0wggoU4LEM9+TQqqchziVfKGOsq31PnC5iE8RpNrztcfSB+ILXYlJA5gjXrEtU6LIxqSCqLJ8w/Ox/ER0pzG+kWxQCYkOsg32eF/FsNqJa0rT40Jucr5ubp1ZuDxVENmc14G/D5aJhMpeh0P2hU7V4AmWp5Rg7IVmQG3AIIgXic86HaCr8XtFCjfYkKqVCxEexbnyQVExkN3P0IfIo1CAlaZiQwdlJ/kO/kbtDTh0wEKD+IANpcAadfxAfFqa+YBwQyhxH5H2jfC+9S0wIzy5f7rsW4no3SHOuc7Ic/p3hyNB6kVfpByjmXHCF5QZTswN9eO1tYvUdVENrTHw+UjhQ1IEFZVWOOkKMmraLSa7nCuWgvb2M6617awNraj5+ggcitfdvrEM6pd20G8Jy02NxYtMrV8xtNoHJxLKtQ4HV9fL5xriVWA+uUX59Yq4V3UxlgOrMl1qBygEZ1/wCnawAZz/Uq1gW+lxOkxXrLU6Q1U1XZzYEWJsCeAfXyiaViDFKWuTlfUZnIuUu1w1/sWrrpVKCllQAUZfd5lHOAFIZyfhK1MwF7iz2irIXnlTDLIC5MyaE5cxSooQglEwDU2Nm4Ec7VglHN9xkmNqXUySiSJajm8YmlaUgAZgcgAJcgWc8SOCHjHZetWlJJklKXyoleFKX1KUBIDlg51LDgI6KvwDMATORluVZgAS65ZVqpLEpALtfzrqrSol31LcW2fj1tGrIsfSGThrIuzjE/CpqTdPvzhwwio7xIJspmV/uH5+8MOLYYmaCpmXsRvyP5hOk1SqeaUzEkJOtrgjQjiDG1k91aXkZHp/Ze/gdUrIAtsx9GMX6DEgDlVYKYPwVdh5h/kICIxMGXYEuLqawHGN5FP8QUq6mNtizgjiL6c4S0MX0OsioswiCpxPKhRJ1sPvC9Q1U9FnCzZsztw2uRy9YJUkx1KCpYUWzZk+EJVozOSAbnyhdYlT0maq4rbRaRMVlJUGNi27cbWaBOPVwTLLFlKBCeN9/L8QUmTjlAO7pYBlEsWSk9OOgcksIQqquM2YQk+FJsRvs4OpTa3XnGrClW/hBLM7XH5PKGlRLATLS3En41dTsOUE5cuw3PCIaaT7/ME6aS+nmfxG1lbfYycSldEMtC1G9hwiRaG0EEkSdgLCPf0ROukDzYSxplSlq1AZSHTwOh8oISDKZISVoyfA/iBUSTqB4PEU3IbSIVyOUVpssi2oOvSGxkEZcCfgJVuIgTCFoBAUQFArJBLtZ/hAAL/wBSWtFedJQwAlrQSbkzMz+V/rFKTUmUClPiSfCkKYgDUBm8QG13DCCWGUgWtSsylOARwT/T6nrrAZqS8HsENeTZEggaDqInCLX8oIoogkCx5l7CN6mjYXsOenWFRVfA2nO+xaqxlBV8LAl9j14aawKr5QmJINsw13B4wXnAzFM3gGu+duHLnFWsS5CRax6WBMUdudsuwLS0xCnyFIUUnURkPCaNKr5dekZGczPaEegxMKGRevGGfCqqWunMmZNlysvhFkh0ngkG5Z3Nrl7wgzaci7/bTWJaWvVLPEcRr/eKaxfRzf4hZEpyfHyPGJVUsMDMSphZVrgaWAAHCKUmqRsoP12ihS4uhaWUlCvIBWkXUCSrRLbecJcfZRGBJbl7QSkrUrQP00iZC1g6RVpaWWSAnU22+rRaXRKHwrHtjzveEVirfQ6ZS8s2/UkagmPFVROzeVogmYTOOkwHfhFOqwaqZkgH/kOf4gfYpvwHTlLpmVc+Ws5VHMVKCBLBLqJ4q/ajiRfYauC/6hcpeXIUolpPezAhKpiszJCUpulN0oDB7JF4qYHSCnGdUt5xcZlfsDjTZze+wA3JY5KmuAQUuTmIADOLJ8wAIeq9tcUc/JjrI9sqTZswKmpMwzFCYgArTYAIdRS1wy/2vYp84sYLTqknKwMvwhIYOhRUcymFi2Z+bAbRPTShZheCMqVboYW81NnvYlLQOnUCg7ly5d3O97xvKoWH33g2mRu2sbpp4S9sdNdAJdPxseMC8WwhE0ZVp6K96Q4LkJLgXb0MVZtFbQkcg5B6QKm09oP3Z1pnLF0c6jUWHeStxw8tj6RvJx9BLhRSNWa49+cO9dS2Yu/QhuTnWEHtLggZS5YZQuoDfmBtFmLIrer8icsOZ5R/sMGF44hbAKSS41s77MWc8xb7ngFmyZcwPlTmCVWUXYLCVEoYsCSNeRjikmqUhxYg6gjVtPW8POHdsEryqV3YUhQBEzM5Qw8aFpSTmBtl0IAsS5it4Ndo5T9Ty6Yy9o8XEpK5a0OtslwcoEwpKglYZXjSFb/sIu0LXeSiE92haCD4gpaVJ5MyQfmYq4pii6qcVEnIlkywQBYADMQLZiz+kSy0bNyhGT6LMEaW2FaOa9ttzBuhQ5AFhASism2g1hhwtb30ERZXoujsYKDD30FxFmpw4jURcwSeAzb6wyTpKFyyYfjwrJHkjy+peK9a6OfTKcvw0ioaZwCSzlujQyVsgB3gRU8YT+l6KuXJbQImU4JyEAtdJ4KBdPlGYXPvwANklyBy+cTqN292vFnAqNCph6vbnfTzg6nmkDy4b2OGCTpakssAFvIj3tCnj88KWqXKUe6HxfXKDwiPHsaKpv6anAdI/wBRafEEKFiz6qvpyimoMPb9YoWPWv2E+njdO38/BHMUUj35faKEtR8cxnCRl5Zlgj6OfKLE4FdgQlA+JRskfk8ALmB1TPfwofu0mzsHLDxH+ot5CPXR18c6Wvn/AI/7LMqaQAzRkVu8jInHaA1VQoM1JWklKwR4EjKkZWTl1Zk5WPI2NhGmIdmkKTml2YEsXyAZmSAr9xZvnvBuin55KlHR75sqr5fE4ez5ksH1B3vG0qf3hCUuEoDJCi5FmBPL5xXWRrwcOMXJ9iJLwGcr4Q4G7gcPzEhpaiXqlVvNvMR0OXJQkFi5Vs19NBwHsxEKV9j9fIe/xC3nb8oqxenU9y9CfR1C1MAtKTwWC3zAPq0EZFTPSnMZZUkfuQXT5tYabxZxXBS+dA6j7/4gXJqVS1OCpKtAUkgt5X9iPck/A9fuFZWOkAAjjtv5dBF6i7QIcOSD57f49YEnE0rutKFl9WyqO11Ia9t31iYIp1AFJmIJH9K0t18JGnAxvJoP2Yr/AMGBeJylgFEwFtrPqbtq149TkITmA30b5n3tC2cNCvhmSyeBJQegzBvWN5Ymosxa22ZI/wCQcese9z7Rn8L8TQ/Hs4gBC01CgFc+QIZwHcP6RHTYac+X9QSon4dCBzDFjpCzJx1ZSEkixcW348v7xZk1lwXGx5v7+cZzw78Cv4T1CT2xtl080KSkEEF2zC7AkE2a1t4klTVqLZBoVFndhZzZhobQMp8XVnJcsc2twHZgCCWFj5aawawbF5PiJcFk3a4ACST81KJ5kQ6Yw14OflWaF2tk1NNSWChkPMXf3aPZqmCmYs/DR/8AMGJU2Uu7pKbBOlrB7+beUUqijksSBleZlBc3exL/AD+XGNr0/wBMknMt/kmK2IU4UCPMQo4hK+YsekP2M0yUJJSty5CR0NzyhXr8LWcyksRYa3ch9OUR16e5ezq4sk1Pk5B2ioxLmW0L+jfkQOkpuOohz7bYRNZJEpbpPi8JLOBq3G0J4kqGqVDyIjp4nuFs4fqMfHM+uhow8CCCC8AaGo8IgtTzL6P5xBaaZ1l3O0HKRQtsBtBqjmPfQbQqyp7WglT1jXeE2HKfwO1DVszloNycY52jnkvEczPaCcmpOn+ICcjnwMrDN9saayuz2gHVTnMQz6tgA+vzMVe+3PlAOm2bMKV0TLV6A/MwvSMWmmpmS5SykAlJICbAWLEhxod4KTp5SlStSLtxOw8yRFPBMO7lHivMV4lnir8RXija2wEvyDXfZUAD147l/wBxPExQnTyQColMsksQBmWRqEjhs+kbTJjqAseRduTt1+HhrFWYtSlkquWbo2wAYDoIZd9D8aUM0rUlYSyQEhwEg3TZ8xO/O8eEpyFgToEklhfUsBcs27CN5bZS+p9dbctoqLIdhpoBCOT+Rql29/B4YyJk1ATYi4jIDY7kVpNQ0tmDKS6g2pLkb6Bn8g7sGtUCg75drlzodPzGRkUX5OfjWkEZ8pm+nPh7t97dDJzMfbf3jIyFPyM21GwhNogA+2vMAFvnf3sr45g6VORYt8/b+sZGRr6fQnHTfkTKhHvgOXv6Rvh4JS4JHJy3H31jIyH1+gKW1k6LveK6vvvx/vFmRUrSXQpSSOBIPp1EZGRO+i+MlPplsYotXxhC+akpzcvEli/nEsifK/fLUOaF/wD5WD9YyMgXTLpxprrr+xalzJdsk1YfZaPulR5QUoKSpUCZShMGhZRDMP6wm8eRkNmUyD1uSsSWu/7leZiExKruhQsMpYg6bW0t84syu0M5OR1Z0oAIBdPL9u7OHbcx5GQHuVL6Y9+mxZJTc/BisfTMUkTCZbhTFswJNzpd+rWEMskySkeNWVTuoA3UXY3uAL+QHExkZFuKm12cT1mNQ9SW5sqSEkBJUCtPxPcl08bADjvEmL4LSqSrPJSFEAMkMdg+Ya2I15xkZFOlo5jqk/IqYn/DulmGYZZVLKWZmPifL6kHf9pO8LlR2BqEArlLTNSBm/kVlL3ZVtB6iMjIXlxzrY/FntPQFEgp11jM7ax7GRzKOnrsnk5lMBvB8SzLSlKzfVhdvPeMjIW0C7fLR7Nsb7CIzUX5x5GQA74J5Ydh0PraM7wLIAWAM2U/E72YWH3jIyLoX46E1TmdoFTgqUbqcHQpcPfncEe+Ma/rDt5n30jIyFUijE+S2yWVLUrxE2iTKEsfbxkZGJDpfYMrc2dTadeUZGRkFoxn/9k="
            alt=""
          />
          <h1>Piyoz kg</h1>
          <h4>5000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10 bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h1>Kartoshka kg</h1>
          <h4>7000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10  bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRedS_m8-bosw4PYdoci-369UINDdCAxisG5g&s"
            alt=""
          />
          <h1>Tanho 500gr</h1>
          <h4>25000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10 bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://www.balticfoodoxford.co.uk/wp-content/uploads/2024/06/maxeev-mayonnaise-with-quail-eggs-800g-1-1.png"
            alt=""
          />
          <h1>Maxeev 800gr</h1>
          <h4>23000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10 bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://yastatic.net/avatars/get-grocery-goods/2750890/9f0bce70-e262-481b-a845-e911323e3d7e/300x300?webp=true"
            alt=""
          />
          <h1>O'rbit</h1>
          <h4>5000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10  bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://www.spot.uz/media/img/2023/11/TfxzIc17010644618077_l.jpg"
            alt=""
          />
          <h1>Bodring kg</h1>
          <h4>35000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10  bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://shifomed.uz/storage/posts/1728869381_photo_2024-10-14_06-29-30.jpg"
            alt=""
          />
          <h1>Sabzi kg</h1>
          <h4>8000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10  bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-xAQlQWgsNPuNTjtviVD3kz7LU-QGLAcqQ&s"
            alt=""
          />
          <h1>Mo'tabar kg</h1>
          <h4>10000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10  bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://шашлыкдаром73.рф/wp-content/uploads/2022/11/%D0%BB%D0%B5%D0%BF%D0%B5%D1%88%D0%BA%D0%B0-1.jpg"
            alt=""
          />
          <h1>Yopgan non</h1>
          <h4>5000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10  bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://dostavo4ka.uz/upload-file/2021/05/05/4068/750x750-03d7698b-ff8a-48ce-821b-86529402a9f0.jpg"
            alt=""
          />
          <h1>Flash 0,5</h1>
          <h4>10000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10  bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://images.uzum.uz/ceimnn8v1htd23ajfnbg/original.jpg"
            alt=""
          />
          <h1>Sprite 1,5</h1>
          <h4>13000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10  bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://yastatic.net/avatars/get-grocery-goods/2888787/cb6e0aca-7b69-4689-87fa-0790760892f8/464x464-origin"
            alt=""
          />
          <h1>Fanta 1,5</h1>
          <h4>13000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10  bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://olcha.uz/image/original/products/2023-01-16/gazirovannyy-napitok-coca-cola-2-l-190705-0.jpg"
            alt=""
          />
          <h1>Coca cola 1,5</h1>
          <h4>15000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10  bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h1>Mandarin kg</h1>
          <h4>16000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10  bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYr4wWSEa7ynAPiu6yf2_q6JFDChQsaLf8g&s"
            alt=""
          />
          <h1>Apelsin kg</h1>
          <h4>19000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>

        <div className="flex flex-col items-center gap-[10px] p-[15px]  t-10 bg-green-400 rounded-lg">
          <img
            className="w-[180px] h-[180px] object-cover"
            src="https://dostavo4ka.uz/upload-file/2021/05/05/5599/750x750-cb43e0f6-f226-4f31-a739-5fa831addfe1.jpg"
            alt=""
          />
          <h1>PYREMILKY</h1>
          <h4>15000so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>
      </div>
      <br />
      <footer className="w-full ">
        <div className="flex justify-between w-full bg-green-500 ">
          <h1 className="text-[50px] text-white">MAKRO</h1>

          <div className="flex flex-col items-center">
            <h1 className="">Ilovamizni yuklab oling</h1>

            <div className="flex gap-[50px]">
              <div className="flex bg-black text-white w-[100px] rounded-xl">
                <Link to="https://apps.apple.com/uz/app/makro-app/id6443717445">
                  <img
                    className="rounded-3xl"
                    src="https://thumbs.dreamstime.com/b/apple-logo-editorial-vector-illustration-apple-logo-editorial-vector-illustration-background-136504759.jpg"
                    alt=""
                  />
                </Link>
              </div>

              <div className="flex bg-white text-white w-[100px]  rounded-xl ">
                <Link to="https://play.google.com/store/apps/details?id=com.makro.hive_dart&pli=1">
                  <img
                    className="rounded-3xl"
                    src="https://download.logo.wine/logo/Google_Play/Google_Play-Logo.wine.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span>
              Ijtimoiy tarmoqlarimizga <br /> obuna bo'ling
            </span>
            <div className="flex items-center gap-[15px]">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Katolog;
