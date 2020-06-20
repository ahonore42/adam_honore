import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  }
}));


 
 

const tileData = [
  {
    img: 'https://res.cloudinary.com/ahonore42/image/upload/v1592684287/raniersnow_uxysnb.jpg',
    cols: 2
  },
  {
    img: 'https://res.cloudinary.com/ahonore42/image/upload/v1592684287/wildflower_o7a09y.jpg',
  },
  {
    img: 'https://res.cloudinary.com/ahonore42/image/upload/v1592684286/buttesunset_zyhlk0.jpg',
  },
  {
    img: 'https://res.cloudinary.com/ahonore42/image/upload/v1592684286/bootsovercreek_amrj5q.jpg',
  },
  {
    img: 'https://res.cloudinary.com/ahonore42/image/upload/v1592685629/nevadayosemite_sdvvvv.jpg',
  },
  {
    img: 'https://res.cloudinary.com/ahonore42/image/upload/v1592684286/ozetteboardwalk_bzhswz.jpg',
  },
  {
    img: 'https://res.cloudinary.com/ahonore42/image/upload/v1592684287/rubybeach2_uubvym.jpg',
    cols: 2
  },
  {
    img: 'https://res.cloudinary.com/ahonore42/image/upload/v1591283381/yellowaster_cpmnms.jpg',
  },
  {
    img: 'https://res.cloudinary.com/ahonore42/image/upload/v1592685627/solareclipseidaho_tkahba.jpg',
  },
  {
    img: 'https://res.cloudinary.com/ahonore42/image/upload/v1592684285/ranierlake_ypucwg.jpg',
  },
  {
    img: 'https://res.cloudinary.com/ahonore42/image/upload/v1592684286/quinaltwoods_akc5wz.jpg',
    cols: 2
  },
  {
    img: 'https://res.cloudinary.com/ahonore42/image/upload/v1592685627/oregoncoast_xzgpmd.jpg',
  }
];

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className="gridList" cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}