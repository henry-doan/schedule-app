import React from 'react';
import Slider from 'react-slick';
import { Container, Grid, Image, Icon } from 'semantic-ui-react';
import { BTestWrapper, BTestAuthor } from '../../../styled-components/homeStyles';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
};

const BTests = () => (
  <BTestWrapper>
    <Container>
      <Slider {...settings} style={{ width: '800px', margin: '0 auto', height: '300px', padding: '60px 30px'}}>
        <div>
          <Grid>
            <Grid.Column width={2}>
              <Icon name='quote left' size='huge' />
            </Grid.Column>
            <Grid.Column width={4} style={{ margin: '50px 0' }}>
              <Image src='https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png' size='small' />
            </Grid.Column>
            <Grid.Column width={10} style={{ margin: '50px 0' }}>
              <p>
                "Bacon ipsum dolor amet alcatra cupim leberkas kevin, pork chop pork belly corned beef sirloin."
              </p>
              <BTestAuthor>Bob B. - MyGToBarber</BTestAuthor>
            </Grid.Column>
          </Grid>
        </div>
        <div>
          <Grid>
            <Grid.Column width={2}>
              <Icon name='quote left' size='huge' />
            </Grid.Column>
            <Grid.Column width={4} style={{ margin: '50px 0' }}>
              <Image src='https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png' size='small' />
            </Grid.Column>
            <Grid.Column width={10} style={{ margin: '50px 0' }}>
              <p>
                "Bacon ipsum dolor amet alcatra cupim leberkas kevin, pork chop pork belly corned beef sirloin."
              </p>
              <BTestAuthor>Bob B. - MyGToBarber</BTestAuthor>
            </Grid.Column>
          </Grid>
        </div>
        <div>
          <Grid>
            <Grid.Column width={2}>
              <Icon name='quote left' size='huge' />
            </Grid.Column>
            <Grid.Column width={4} style={{ margin: '50px 0' }}>
              <Image src='https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png' size='small' />
            </Grid.Column>
            <Grid.Column width={10} style={{ margin: '50px 0' }}>
              <p>
                "Bacon ipsum dolor amet alcatra cupim leberkas kevin, pork chop pork belly corned beef sirloin."
              </p>
              <BTestAuthor>Bob B. - MyGToBarber</BTestAuthor>
            </Grid.Column>
          </Grid>
        </div>
      </Slider>
    </Container>
  </BTestWrapper>
)

export default BTests;