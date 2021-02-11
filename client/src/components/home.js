import React, { Component } from 'react';
import { 
    Container, 
    ListGroup, 
    ListGroupItem, 
    Button,
    Card, 
    CardText, 
    CardBody, 
    CardLink,
    CardTitle, 
    CardSubtitle 
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class List extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    }

    render () {
        const { items } = this.props.item;;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name, link, caption }) => (
                            <div>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">{name}</CardTitle>
                                    </CardBody>
                                    <img width="100%" src={link} alt="Meme" />
                                    <CardBody>
                                        <CardText>{caption}</CardText>
                                    </CardBody>
                                    <CardBody>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                        >Delete</Button>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

List.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(List);