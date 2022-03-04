import './address.css';

export default function AddressCard(props) {
  const {
    title,
    name,
    email,
    mobile,
    type,
    line_1,
    line_2,
    landmark,
    city,
    state,
    pincode,
    select
  } = props;
  return (
    <div class='card address shdw'>
      <div class='flex-ct-sb btn--auth--solid xs-s'>
        <h1 class='lg sb'>{select ? 'Select Address' : title}</h1>
        {select && <button class='btn btn--icons btn--add sb'>SELECT</button>}
      </div>
      <div class='sm-s'>
        <h1 class='lg sb'>{type}</h1>
        <h1 class='primary md sb mg-half'>{name}</h1>
        <div class='address__line'>
          <span class='primary sm sb'>
            <i class='fa-regular fa-address-book tertiary md'></i>
          </span>
          <span class=''>
            <span class='primary sm sb'>{line_1},</span>
            <span class='primary sm sb'>{line_2},</span>
            <span class='primary sm sb'>{landmark},</span>
            <span class='primary sm sb'>{city},</span>
            <span class='primary sm sb'>{state}</span>
            <span class='primary sm sb'>{pincode}</span>
          </span>
        </div>
        <h1 class='primary sm sb mg-half'>
          <i class='fa-solid fa-mobile-screen-button tertiary md'></i> {mobile}
        </h1>
        <h1 class='primary sm sb'>
          <i class='fa-solid fa-envelope tertiary md'></i> {email}
        </h1>
        <button class='btn btn--auth--solid btn--add sb'>UPDATE</button>
        <button class='btn btn--add sb'>DELETE</button>
      </div>
    </div>
  );
}
