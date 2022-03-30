import {
  ActionIcon,
  Avatar,
  AvatarsGroup,
  Badge,
  Button,
  createStyles,
  Group,
  Paper,
  Progress,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { Bell, BellRinging, Swimming } from "tabler-icons-react";

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    overflow: "visible",
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
  },

  icon: {
    position: "absolute",
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },

  like: {
    color: theme.colors.yellow[6],
  },
}));

// an array from 1 to n
const getProgress = (n: number) =>
  Array.from(Array(n).keys()).map((i) => i + 1);

export function RoomPreviewCard() {
  const { classes } = useStyles();
  const [isSubscribed, toggle] = useToggle(true, [true, false]);

  return (
    <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
      <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
        <Swimming size={34} />
      </ThemeIcon>

      <Text align="center" weight={700} className={classes.title}>
        Netflix
      </Text>
      <Text color="dimmed" align="center" size="sm">
        3 / 4
      </Text>

      <Group position="center" mt="xs">
        <Text size="xs" color="dimmed">
          created at 4/2/2021
        </Text>
      </Group>

      <Group position="apart" mt="xs">
        <Text size="sm" color="dimmed">
          Progress
        </Text>
        <Text size="sm" color="dimmed">
          75%
        </Text>
      </Group>

      <Progress value={75} mt={5} />

      <Group position="apart" mt="md">
        <AvatarsGroup limit={5} total={getProgress(8).length}>
          {getProgress(8).map((index) => (
            <Avatar
              key={`avatar-${index}`}
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGBgaHBocHBwcGhwhHBoeGBoaGhwcGhgcIS4lHh4rIRoYJjgmKy8xNTU1GiU7QDs0Py40NTEBDAwMEA8QHxISHzQrJSw0NDY0NjQ0NDQ0MTY0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQsAvQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEHAP/EAD8QAAIBAgQEAwcCBQMDAwUAAAECEQADBBIhMQVBUWEicYEGEzKRobHwQsFSYnLR4RQj8YKSwhWjswczQ2Oi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAKBEAAgICAgIBAwQDAAAAAAAAAAECEQMhEjFBUSIycYEEE5GxQmGh/9oADAMBAAIRAxEAPwAXB8ShFUHr6a9fKm/FeMEgCdCo07xqa8+t4vTeiLmNLJv8P2NerLGm7OT4yNdgeORCE+XnSn2lcOZBjfruOWlZW/jWmfn6Uddx+dNd1+bKdj5ioftqMuSN8JXChRdeDrROHeRQF9pNTwzkVohKmZpo2ns7xGP9ttiZWeTdPJtvlUfaHCe7ICmbTjOn8v8AEvmDp8jzpBYuc61KXff2Cp1YGfJ4+zj6jtVa3Z5048J8l0YzEJr0qktAjkaZYm32oI4cEN4gI2BmTrEDT1pZR2a4vQFfQgnTYxXLNyCCKnatM7qigksQABvPQd616eythEl7snNJCjXLA012Mz1qYspKPZmLDVM3dTrWjxNjCEyqHKBAAYgCJ0nmTO5qCPh1GttRBkEGdSf1CTI/vRO/d1SE+EbMChO+3nQmJJWRWie9ZlQyKZmMogzyykH6Gu47g63CuQkFllZ5wBOo2YSNKLpqhVKmYwPTPC4qfzY9fzvQmIwTI5RhBB/49Khh3IMH8IpVovBh1wBGkk6zpy1qy7ifeKBHiXn1r6+2dAeYigbTlTNBxSZpjlbVFWIWDQ1w0xxi8+tLmNciGZUyua6tQNfClbIIZ3JViDyJHypngLoJAOxEHyPOqcek3HPR2PmOVCWLsVSEq7K5IpukMMZhcjkHWOmxHUHpQdxssRty9dwaZL41jcgfShb1jKSGB5+hrpRt2imOXGNPsCjWp+6KnqPuKsVKYWUDLk/VqV79R8tfTvXJHfVooTSmfDMXkaT8J0Yduvpv9OdLsny+1SR6tEzZIJqmOeNYYAh11D79J7HnO/zrP30mtHwy4LqGy3xR4D35D7D/ALeQpPdtQSOYrmr0SxSa+L8E+AYUKTiH+G3IUDdnI1nsAaG4rxyWOUnWd+vlTfjLBMJaQHKWBcz/ADEn15VneH8Fe+x1MCJPnWabfSGS5O2ALxFtQTIMH1FfNjidBz/Na1Nr2OtkwWaavu+w6R4WYHvUVy8srwdWZFccx57afnrWo9n+IszprEMNekg/eK5e9jlEQ7Axr3oTEcMfDKX+JTA8iDofuPWqwvyJKI5xeES+xZJLsugOgzKO3MgfWsni7OmYcjDf+J9dR5jvWo9jsSGdDoGBDHpoQZ8p6UFx/DC3ibqZfBnaVH8DnMAD1AIjuBVe9HY3TpiLC3DNFYrD7MNQd/7+v96HS3lYjccj1HI/KneBsF1KjVgpYDqF1YDuBr6Gio2iqmou2Ibzk70C4ppj7dKHNTa4hyS5bItURXxNdBqUmSQ6W9nzHnJ9RzqC2v71Tg3gz3pgF6elXStFL2WYZiPSr7iAiev0POo4ZJMSBPM7DuYq+yv6Tz+h5H861WK0GXVgRSpZiII0IO/ltRVyxAMiCpgj9/np8utUoQCJ9elc0LF7W+y7FoIW4vwvMj+Fx8S/UEdmHShVNHqmQm23wOAVPQiQrehzKfWhRbgkHQ7fKuiNlT7f5+5ZZu5SCNxTTiI94BdG8Q3n19fvNKisaUy4Zc/SdjTv2YsmnaF3HEYpbQESVEDmImST+3etb7F4b3WEvO4lzlA9J/vWf4thCjoxG4he8GK9DfhiYbCeJuQzEndj+fSsuRpfkeMrSQjwK6yRThTptSjh+JQwVZWH8pBpt7xY3/DUGbUwXFKI2oPF4MXLLodYDH6UwxLLFTwFgOCq65tD2HOmi6JZOjy72fRkxIyz4Z06jmPl96Z8fGa4XGsgehVQI+gp3c4KLeJdP6/OCpP71mf9QXzZv1GfInWtWNLszttu0L3Sr8NiijAgwQZB8q5cTegrhimfxKdoMx8MMw58unakV5aa4a9yNAY2zlbsdqnLewrqgKvhXxr4VlkchjZ5jb8/4phYUxQuHSRNM7I0rXGJSLTLEGlWItRFGcOe0HPvg5XK0ZSAc0eEknlO9U6RRrQXbtm6hcDM66OP4ljRvloT1APOk+Js5THLkeoOxp3wLFe6uq5+E6OOqnf+/mBR/tPwbIxy6qfErDYq2v138w3WgpVKjFy4yaZly+ZAp3XbyP4PkKkRng/q2Pfof29B1qLW4AMjciOYiN+2v0NctnWmr0aOd9lltZou2Iqrcz138/8AO9XgUTFktSoNdRcawpnOXgdBEE+pkfKmPttiXdzZVQwUKBmPhU7sx66R8qr9n0zXbWmqO7HyZBAA/wCk1bduK91w28/Os2TsfEk5UYzB+zl8u2UhMpGUqSA8k6p4jy11HOtbgrN1cO5d8zqSAdN1Jjz5UW+HVFLAeUdTV+ESLYU8ySfPeouq0bEqMJxWxjkzM7vlDAFQTpIJEADbSJ2kitz/APT229t1zlgxIBVoIIdCQVZTGhgEciajcwsidf30pxwIsz212CGZ59h8/vXNriycosXe1LxiblxRohjylAoPkIJrzZBXpXttZ93cvuYYFUHkbh1HnCsflXnr24MVo/T7j/AvGkcE/ENx9aAxKcxRqmK5jLYXnIIBHaeR7jUVaStCxlTpiUNBmjLi5003GopfiDBozAkjQ1GPod+xY6Gq4p1j8LzHP70nK6mp5IUd3tDqzvRiUIulEo1aYnIIFTjSfn+1VqamveiWiwjDPyNbbgmKW9b9zc1yA5Tzy7kDup8Q9axFpNaYYPEMjhlMEGRU5xvohmimc4vgMrmFyjbTUEjcjz39aB9zHKttj7K3UDrs2n9Ld/qPKkSJ+lhtI8jRjO0SbdChLZ17a+lX21mj7doBg0TB1HUcxUhg5fwCVOo8u9HkSlbZbwEkXk1jUz5EGreKYUrdLjQb1EX7aK4VgzygGXULDqzeLYnSNP3onHY5Xss8jOAdO+lTlthxtxkmC4zij2lDoi3ChkqxjcHUdwYIpfhvarMoX3Lsw2X4SSdBLHQDvrSS+MQ6kkuJ2VYiO8sD9KimEuCCpfMBuUIjfnz3qaijY227R6FZvkqJGUkAxMxPKecU14FYy3k7wfnXn/DeJX1uKl1ZUnR4I9NfWvTh/s4d7x+NUYJ5/Cv1I+tTmq17BKeqMJ7Y8XOIvOBogcga/Fl8CnsIBPr8s6lrMD1GoHXqPPn6UZct6xz29aGQQ0nkdev/ADW2EVGPFGZSbdsGZKGvarlB8qbY7ClTMeFtRG2sHTtqCOxpdctxrTdopVOmLWw0ieYqpSQaZDQ0Ni7MGRty9am41tDqXgPwye8Ur2+3P0/vQN/hbsTkWWGjjaCNj6j6g1bgrxUjXatJawFvEKHzqjjwtmMBgPhIPM7g+QPOhNWrHxNJtMzTqN6ij1Oyc2lVOsGnfsReglGolTpQdtpom09FBUqC7RopKFRSDR9uw36vCNyW0gHYnn5daDJZJ2OODYqCbbfC+nk3L88quxmHPxjcEB//ABb12oTBPaJgK7/zfCPSdae4m+SjNb8DkASdfWNNdN6hKSUtAg7TTQnxFyzZ1xDZWILBB8TRHLluN6zPG/aBnUhAEQeEKv8AEZnMeZGvyjaqcZgrl24HYl4JhyfibmokySInbSr8TwAFQp/25g67BhpqBrt9R3rtvY8YxTSb2Q9m2VwFdsubSTyYMcs9joPUdKqxOJ924BPhJ+o0+tC27DWyyEagkH03/v61Zxm371c36hv59fX71V3xtDKHyfobMGdCUcAxpPLzpZZGJ94q55PPx6QPTzpDZ4i6DKCY29KsTizAzJHMxzNZ+cfI1Uejscyqrb6fPlrTD2n4kqe5slt1MknbVfFHKGRge01jvZ7FtcuLcuaIuoB1n+Zuuk/OtVa4VaxaZ7rG3dd3KNuFXN4VYdOcjmxOtdJpNN9DrEmrfkXY/BtlJiCvxDtpqOo1GvRhSlxXoVjhnu7QW4PehCbTAfEB+kK39LArOhUwdQDWe4twAKGeyxdFPjUgi5b5w6HUedUx5ovTMubHx6/Irwr5090x/oJ5HUgeUk+jGk+IQgkEQQYI6EUUWIOnpTDidpbloX00YQtxe8aOPOIPp1q/TJqb1ZmXWoqkiPlRFxapy86NFk7KFWDTDD4mBGn3ocrXyiuqjmkwZhlNFYlQyhxvHiHcc/I7+c1LEWDBMaqcrDoeR/b071RZPKlrwdd7RXaNG4a0XYKoJJ0AHWqSkU3sOLFvP/8AkdSR/KgG/mxgeRoSfFWdKVDBWS2mUQzrMvoY/iCzoSDIk9G7SLg8O145nbwA/DJOvcncnmTrS5bhBY7jTXsqhfWSCfWtDwpVKL0gf527zU3uN+SaVMb4LBjSBTY4VUGZ2A7SJPZRzPYUswnEUXXWBt4T852oXiftRYByhgWJChVIYySFliJCCSNz/aszu9jX6BFe3hjbvsMzM0sjapD6nTlBCif8QFx3j2FvXM6MyrAhRrqe+kUovY3M1xLjZ0DEKrAeETMSNT60AtiwxIyAD1q0YtbLRxOW2MbyBhmVsw0k8+0/QfKhKlgLbI20r1B3B5EGrcZbAPQHUHt5VaMjU8PxsT8RwJDbb6/PWfLWfWlvupMGByk7VscDwx8Qy27a52OgAIB9ZOgGtaHC+w7Wifeqvcbg+ZPxDtoKzZuCdnY8cpabRhcetwW0W0GgHMQB4gwOhAG42+VanB8QZ2BtsSjM7gERlDuxK/8AS4ceWU1reFWzZPuraB0ADLnuOjINnSVRi6gwROwaNYFGY1EvXbdo2RbJV2WCSHZSmYSQIYLr3Gb+GorJTtiSxz5bVf78FHDMWyuSzKyuuV1YyGAnKT0IkienkINuYou4DNaDgBRcIYPp1ZSKW3+DBeZFLsVbjUEyKK4ydoaWCXG/RpT7G22BuObbmJOUMqnvIaB8qQ4r2XcKrW/CHGtt3EGRMLcMAnsQD51zAcfuJs3h6HXN2itFiONWTZQXEJV5IXWFKGdCdgZ0p1LJF92YcmNLs8v4pw25ZYrcRkPIkaHuDsfSl5SvTcBiwWfD3FD2j4kDCVZDsJ5Mp5jsetZn2k9mxZHvbRL2SYM/FbJ2Vuq8g3odd9UMtvjIknRmbSCYYwDz6Hl9arI1NW3KrGtXHT3YwsXVdQ510CXB1B+F/P8AdR1pdjMMUcqdeYPJgdQR2IqvhOJyHXVTow6qd/Xn6U3xljMmXdrYlD/Gh1+m/kT0pF0LJ8Z34YDgLYdwrfD8Tdgok/SR6iq8dii7kn9QiOg2EeWlE8NTS4f5I/7iP7VTicLEN3j57f29az5pfKinkHtZkII8Sgjnp5EcqJxri8IVYQ6AgELK7rOzQY2nlS3HYnKCo3Ohjc/yz0jc945mGvAw1wqXM5QQoGioDrlRRoo7DnrSxybqvuGl2Jv/AEHEO2XcciSfsdad4b2U90Mz+IxpA2brry+tbHh2GkgxpzphxO2MhEVOUUpWhlKzxsuwLA7yZ8513qPvCDRntBay3SY+KPpM/t8qXhgaZS8GiHQ1wWIatFg8jpkfxc1/ceRrI2blNsJeNOmbcbVG04bh8OcuhssIyuk6eYn7fI1trOMdEH+pIuW/04hBIA//AHKNV/qiNNY3ryuziiNRWr9n+Ks+a2rEOQSkH4iBJXzIEjy71DLilXtDZFFrl1Q+xlhLdwOrBsp1gMREQwzAZSYJ56aV3jGAdkz2f/uIwuWzH60nwnsylkPZzRPsxxS3eLWnUZztPON1B5RuB508bglvSBp08P00rM9OmY5ZpptSVmVGIa8gcAwQDB3WeR7g6elIsXbLMVA8+3rXpy8NthcoUDnOkgnnIrE8csLbfTWQCfM1XHJXoMM8pfGX/BA+FAidftT/AILiUKlGAZToVOxrLYvF61XhsYQZFaHFtbBkgmhz7RYQ4a5bKk+4ukoG5oxGdAT1BQQec1bhMeSksAd0dT8LRo6kdOY7EVe10YrDvYb4iAyHo6eND/3KB5E0g4TiA117c6Oi3FPl4G+wroW00zzZw47Qn9oOHe5uQplHGdCd8p5H+ZTIPlPOlINa/jdrPhmH6rLBh/Q8K4+eQ+lY8VrxybWxogdrQ1oMC5dNPjt6r/MnMem/kTSFFo3A4go6sNwfn2PauXQ8oqWmMuGoPelRotxTE8iCDH3Fc4sAocEwqAFzpImIVQdC5BXfbMvXSeLthWDr8DiV7TuPQ8udKuI3ze8LA5VZiY/Ww+EkwJnO5J/mg7VlzxlJrj5BG4vjLtCbDYbP4up0B10HKeszJ51qeFpkApVhHUEAqconVY84gx96dWiDGUgjprI8wdRQjHjoMtmx4Tt51ZxQ+E0Nw+4Aq+Vc4rela5LkwdM839rG8S+tIO4pr7T3JeOlJleozT5aNMJJKmFWrlH4e9SgHpRVi5TwlemXhOmaGzd0ovD4pkZXUkMpBBG4I50nw70cj1ZM1UpI2f8ArxmTEp4STDgcnGsgd/7d69U4Tjhetq4iDvHIjevCsBiYlCfC4g9iPhb0P71rvYz2kGHZrd4kKdDzysNjH0PmOlRzY+UdGTLiaVrx/R6jeuZQTyArzLj2Ml2nr9tP2rXY72mw5tsFuAkg6a9PKvMeI4nMxqeGDV2hf00HKd+ifu1bU1A2lB0FU2Xq33gma0o0Zo0OMO+Qqw0gg/KvPcLxIpjSyHQZgOkTMR6CtZxPHBbLmcvhyz0LnKPlI+VYziGAyEXbaMU2Y6n11mik1s8+aTdHoqFby5l+G6jJH8JZSpB8jB8ta8/YRvoad+zHFcp92x8LkFT/AAuPhPkdvlQXE8P/ALjGBBZt/wCoz+eVXiqM0Hwk4yF0fSrLKywHUiuR9PtXwFPRVM1HCgt1Ww4GplkmfCf4Z77TzMUDjsFGURqqjNqRBbXWCDr+1AcPuOLispOcsIM8501rYe0Li6ouJ8J8LQOY/VHeJqLuMq8P+yk4rIk12u/sZT/SqSNp/lkfWZPzpiwC2ywUsRtBGYGN1J0nfwkiRO+1CIhDQaJurC5hOsT0jypMi9GnHhjOOxhwXiC3E8Jhl0ZToynmGU951qPEsdlPl9aT4nBpdAZWa3eQaXFmQBsGA1ZY0karpuNBnMVxW6TkchnViMwjxchEaHz5g1OMqlszShTpl/tPhoKuNVcSD26eYMg+XekvuCACTE9f8SfmKfYW975CkT26f86fSkuJwZRirDXYesEH5fejmhb5ROjdbOWbJnr3BBHrG1SdIoddwaNUgjefuO+tTq1RSDPrF0imdnEzSdgVMH/B8qtS7FdGVaZqhOh8l2jXu51D/qHhbv8Awt+3oOtIbOIo/DXxPY1ZOzRGSbGS3261P3kihZ71JWoUVtIMtXI3qxGkgDUk6ftQDtFNODYN3bMo0GsnafyaZKlbM2d6sQ+0uKOZLCnTNmbuRoCfr8q1GDAa2A2oiKxGJ1xLzrlcrr/L4f2Na3B3vCBRq1Z5s00jOcQwLWH0HgJ8B6dV9JHzFMLOLZhIykn4swB16ieZ59xTD2wt/wCzhY5+9J/9usuhqkJa2TnDmkTRudSIqiy9EKOXyqi2gPQfwe0S5YfoVm8ifCD8zPpTXCXinhcNkcbkR5MF3A7neo+yAbNeyKpb3cgkxGVgducifw0DjGYOWJJY7k8/Pt2qb3JobG2pWgrEpH9S/VTz9Pse1FWlBTXnQlo+8UQQGXrtHQ0yt20QCTn0mFOg9TSSWjTizKKcd34Qqv4cghlkEcxvB0JBrPf+is9x4YL4Sy6cyJIH8OprX4jFltgFHakGIL+8yKTmiFIgHMywII7mKnJJrZyjKUraENhWsPDeHuDofUcqaY9C6Bv1Ke2v6hEec/Og79x593eEk7EjxA9DET9/nUsFiNMoaY/bamxu1xYrSW10KWQzrXVJBkU1xeFnWKWNbjnSZItDRRfnB1gROx1g/m3+K+dRG0EelVpt2OnqNf3+tTt3JEHUfUT0P7bUE7Ww9MrDVajd4qpkjnI/NCOtdUUEqKxk2NcPqIz+Xxf2q9EP8X3/ALUDhmg0wU9KojQmaHgXDVuqzO58EEKB8QOkZuWv4K1GFcIsRoFZo5QgzR9Kz/s40I/pV3GMcVV8vwra+bXCV+mWkkm5USyVFV7Z52uILXS7bsxY/wDUZrS4W7EVl7aQR506sPVoLwZp7Q79o3zWcP296P8A46zeWn/FWzYa0ej3B/3Kh/Y0iIp4rRFA1gU34Vg2utAE5dfPtQeGw+YGNwCSOcDc0x4C5DwpytuO8cqbpaJS6H2C4a+FvXs6bWQwGsHO9uNeo8Q8waB4zh9Aw58uYqXtHxC8lsszhmgAS0sAzDbN3jy1rJrxO+ygknKJEhQJ1nVyDJ85NQ5U7fY2KLe70NsLeKMCKbOZGh0YTSJcUzpNpFzgLKlV10OYgk7aTr/atBwzA3Xse9uFVE5QqIG1j9RWBHcTuKaUlLZdT4y2AO52nQaE89eQHlzoOS+Jt5RmYurR1ykGJ5bGrOIowDaQZB9QIobgtthdLtI3RTt4m0MHlAOp5ZtNaDLKUVuwX2jZ85zWiuUyGBOh/qilRZQcynTMTGxAJ2itl7S4SwgUrpmHhfIqq4HNWXL6AtWOv4WDp/nz21Hp61JN3ZLXgdWXkDmKCx2HXcaH6V3ht4xlO4+3lRl9Myz6eX5/etD+URo6ExQwBz+KP6oj1gDTvVeSPzaiMQPhMbeE+moPqD9KjnkQdeh5j16edQoaneykE7VNR5fb71CKmorkh1oKsR+Ef3o+ww/IpdaSjrIqiH5UabhrQh31Mab+nTz+lQ434EcMRNxlVQP0rbCqD5TI/wCqpcK1yDq4/ahfay4pfTcEA9IPi35zvQ/yJZG2ZwWoaiU0qVuCJjUV11g1XjRJO0HNcmzl6OD81YftQGWrbLaEeX59a4RTLom1sm2FZN+Y3G4qzB28pk6nkJ+ulNcJYGUBTmuE6gjRRzMk1mPaHDvbvQG8LAMrCAIPImdMpleW086WWSkJFKToI4zjmIhcvxaHck6TKmRHL6eaC3cdiASSIiCZAG8CdqtxXESxHZYJky3IntNG8Ksh3+QrOqlI0Km9eBxgsGVBZJBI0nXQ6kTAkHanPDOMPbzK6BkYAZZYaCNZB+LTQ8q0fs97PwMrLIIBHaacXvZa2oOZCRHXb5UZZI/SyHJKTcjE3vdXJYE67hjNKccwDsjNookdpUNA9dK1ftPwZAttrULC5cpOsA6Gesn1pPe9l3CM99ApXcm5DFSIAVUnxf1b9qaMlWirnFrfQLfxHvMKyq0OplQw8LiPEkHQ9Y6nSsitxScse7b+Fpyk+vwn5U7v8NuMJR2yAnUgAiIJ0WTzpBxG2Wac2cxBJ+IxzM7/AFoNU9Dt/ElbJR9oYHVW5+RpvZYEn+E8jvH9x+1IUctlVtY0BO46LPTz2q7DYojwk7HQ9O1NCdOjmxhibeUyAJ59NiJ+ppdfTXMIg8hyPl0pyCHQN038vz79qW3rBUnKdKMkuwR7BlAnWrkt69qils0SiUiRey1UFWoNaggqxRVEjrH3C/0nof2/zQftQJuEgdJPUgD6wauwdyFQDfWmN21nQKQDmDPJA3ZgAe0KDQ6dkJ22kjKYZoNFXrUdwdVPWgrdaPhLI6FGnOviQaeLqNfnHnVbpEZNxdoT4YCTOwGsbidJHWNPmKleslTB8weRB2IojHYUh5XfmNNu5mK7bWVEiQJjUCOo/OtDkUSUlfkZKULRabKhVSXYxPhBb5GR6CszxG+rNlYkhjAAgkKDoYOnTmKKuXG924zBQi5tTqQpgqvIkyPQGlHDyb7hAvi08evgQascu3z3mKlN18SUVRbe9mb1ux/qGWEzQBPiy8nK8lO2869NanwC4FYHnpTD2o4wr27WGtl2hpd3JliCQqzsQAQdt4oThmEZQGyzJkxH3/N6nBbKKSij2v2dxqZVJJ1UHX5adqbcQxiZDrXknDsXdJzEqgHVhoPIVqE4nFpWnO2upG0dqnPD8rIy157CsPaQ3g7geGWAM+EgeEwees+tZHjXEi7sAxKyfXlROK4q/iPNgVA5nmY/OdI0ZGnl2q8I1tiuN6J4S9lOaQNIOhPloCPwVnOLkMxIA9BH0k06mM0AetLQJcAwRryHQ00kaYP4iXMduXQ61esHU89/nr/f1q/HYQCSpGnIn7UGj1JpDJp9j7BDKcvI6CeR5fePJjXMRZj82jcHuKBwbyInb7co8qJa6S0t+r7jT61XVHR9fwULoauU1U+9dShVFEy8VYtVLVqCnQWH2rkBY6UysYqHGY+EIvy0J/c0sRYief71bcaGnkRknyEH7ig1ZN/UL8bZyOw5Tp5HUVyy5BBBggyD0IonHpKo/MDKfTaglNPF6A1scviw4B2b79R+cjQ90wdOeusVRhm15x2om9dM6D7elKwKPHopZkeRk1aJknpEfSmlq1hrFo+7EMR4oEyRyJJmN/rSIEAZgT0PmR+fKu23Ma0zimZmnqhK+dmzgwEIIgiQ2moEzyG3anOGzlQq6ADQeVQXh6DxxvGnkAJ+k0ysHKAOXQ1KNxtsZtPoFs3GDetaJ8UAijlGp+dKcXaUDMCPztVuE/3Yt5soAzHXeNwPv86MnyVhUUBXcSXeRoQdB0jap49BAdee46GgBdXNp/zVtxyRA1pugOLF+LxZEKpM84/NKHe6SJk9D18tKLChG21ZiPIAf4+tA4gwWB2P3Gx+U1K72Vi6YPcTrvURREhl03X6r/g/eoKBQHkt2i2wdjsaYE5hEa0uWiLVyKdATPj33q1FqwtI1+ddSm4jcrLEqxKrBqxWpkBsLZ9qjeuzHb/k1UGqQGtcDzZcWzIRz/CKBC0Whiqri6zSrQbs6hIFW5qrSrABQs6xarVeUkdKEFWZyR2qtkAz32kDlpXzOTuaDVoq9b6qJPMGPPrQlSBxsJCeBnO2gHcn8ND2MQBnEwSuVfJjr/8AzNDX8USumwND2DJHnU3vRSKpF6WxJ7HQ+VGWrigarB69aBuzOu9RRtfWuatUxmgh1l1P9RH0/PSg8ePFRV5zpH6YI+WtV4sZoI6UOIrjTFVswfz1FWXEg6bHarBZ7U1bhwFpX369gdvzvQrY6lqhZYOUcqtyFjIGtXNhxyqNpSKbjsDJIpG9WqK6hq0LVFo6ysCpqKkBXwFcw2TRasiq0FXAUrZxNBXGWrEFTC0jZwNlqYqxkqNCwim4agriKi1fBdqoiReqTtUJhvKpWd6gNies1zYy9hTKhG1BkDN4dBXx2NcWlSoJa7jJHP8AzVNtdakKmg1FFI5uy10g0K45d/v/AJo67vQeM+L5Vw0togu9HWbhCleR3HKlh3oq3TJWJ0WAV0618K+FE5NkSsVYr1zlXVoMJYpqYWooKtWg2GiSJVwWopVwpGE4i1MCvq6aUBEiqytWmomgcmf/2Q=="
              component="a"
              href="https://github.com/rtivital"
            />
          ))}
        </AvatarsGroup>
        <Text color="gray" size="xs"></Text>
      </Group>

      {/* <Group position="center" mt="md"></Group> */}

      <Group position="apart" mt="md">
        <Badge color="green">Open</Badge>
        {/* <Badge   color="orange">
        Full
      </Badge>
      <Badge   color="gray">
        Private
      </Badge> */}

        {/* <Badge   color="red">
        UNPAID
      </Badge> */}

        <Badge color="green">PAID</Badge>
      </Group>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>

        <ActionIcon
          variant={isSubscribed ? "transparent" : "light"}
          color="yellow"
          radius="md"
          size={36}
          onClick={() => {
            toggle();
          }}
        >
          {isSubscribed ? <Bell size={18} /> : <BellRinging size={18} />}
        </ActionIcon>
      </Group>
    </Paper>
  );
}
