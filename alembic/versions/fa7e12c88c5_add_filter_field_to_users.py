"""Add filter field to users.

Revision ID: fa7e12c88c5
Revises: 2325abc7de81
Create Date: 2015-10-13 21:06:15.875359

"""

# revision identifiers, used by Alembic.
revision = 'fa7e12c88c5'
down_revision = '2325abc7de81'
branch_labels = None
depends_on = None

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('search_filters', postgresql.ARRAY(sa.Unicode(length=50)), nullable=False, server_default='{}'))
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'search_filters')
    ### end Alembic commands ###
