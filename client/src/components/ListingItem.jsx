
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem({ listing }) {
  return (
    <div className='bg-bermuda shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
          }
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {listing.name}
          </p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-600 truncate w-full'>
              {listing.address}
            </p>
          </div>
          <div className=' flex gap-3'>
          {listing.type === 'rent' && 
          <p className='bg-[#3D52A0] w-full max-w-[150px] uppercase text-white text-center p-1 rounded-md '>
            {listing.type}
          </p>}
          {listing.type === 'sale' && 
          <p className='bg-[#7091E6] w-full max-w-[150px] uppercase text-white text-center p-1 rounded-md '>
            {listing.type}
          </p>}
          {listing.offer && 
          <p className='bg-green-800 w-full max-w-[150px]  text-white text-center p-1 rounded-md '>
             In Offer 
          </p>}
          </div>
          
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-sm'>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className='font-bold text-sm'>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
            <div className='font-bold text-sm'>
              {listing.parking ? "Parking" : "No Parking"
               }
            </div>
            <div className='font-bold text-sm'>
              {listing.furnished? "Funrnished" : "No Furnished"
               }
            </div>
          </div>
          <div className='text-green-600 mt-2 font-semibold '>
            $
           
            {listing.offer
               ?<span className='text-nowrap'  ><span>{listing.discountPrice.toLocaleString('en-US')}</span>  <span className='line-through opacity-50 text-sm'>${listing.regularPrice.toLocaleString('en-US')}</span></span>:
               listing.regularPrice.toLocaleString('en-US')}
               {listing.type === 'rent' && ' / month'} 
          </div>
         
        </div>
      </Link>
    </div>
  );
}

ListingItem.propTypes = {
  listing: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    offer: PropTypes.bool.isRequired,
    discountPrice: PropTypes.number,
    regularPrice: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
  }).isRequired,
};
